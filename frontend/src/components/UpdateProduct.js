import React, { useEffect } from 'react';
import {useParams , useNavigate} from 'react-router-dom';


const UpdateProduct = () => {
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const navigate=useNavigate();
    const params = useParams();
    useEffect(()=>{
        getproductDetail();
    },[]);
    const getproductDetail=async ()=>{
        let result = await fetch('http://localhost:5000/delete-product/'+params.id);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    const updateEvent= async()=>{
        console.warn(name , price , category , company);
        let result = await fetch('http://localhost:5000/product/'+params.id,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/')
    }
    return (
        <div className='add-product-style'>
            <h1>Update product</h1>
            <input className='inputBox' type='text' placeholder='enter name'
            onChange={(e)=>{setName(e.target.value)}} value={name} />
            
            <input className='inputBox' type='text' placeholder='enter price' 
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
           
            <input className='inputBox' type='text' placeholder='enter category'
            onChange={(e)=>{setCategory(e.target.value)}} value={category} />
           
            <input className='inputBox' type='text' placeholder='enter company'
            onChange={(e)=>{setCompany(e.target.value)}} value={company} />
        
            <button  className='signup-button' type='button' onClick={updateEvent}>Updateproduct</button>
        </div>
    );
}

export default UpdateProduct;