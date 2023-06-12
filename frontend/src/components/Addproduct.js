import React from 'react';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const [error,setError]=React.useState(false);
    const navigate = useNavigate();
    const setEvent= async()=>{

        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');
    }
    return (
        <div className='add-product-style'>
            <h1>Add product</h1>
            <input className='inputBox' type='text' placeholder='enter name'
            onChange={(e)=>{setName(e.target.value)}} value={name} />
            { error && ! name && <span className='span-add-box' >enter valid name </span>}
            <input className='inputBox' type='text' placeholder='enter price' 
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            { error && !price && <span className='span-add-box' >enter valid price</span> }
            <input className='inputBox' type='text' placeholder='enter category'
            onChange={(e)=>{setCategory(e.target.value)}} value={category} />
            { error && !category && <span className='span-add-box' >enter valid category</span> }
            <input className='inputBox' type='text' placeholder='enter company'
            onChange={(e)=>{setCompany(e.target.value)}} value={company} />
            { error && !company && <span className='span-add-box' >enter valid company</span> }
            <button  className='signup-button' type='button' onClick={setEvent}>Addproduct</button>
        </div>
    );
}

export default Addproduct;