import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Productlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        selectProduct();
    }, []);
    const selectProduct = async () => {
        let result = await fetch('https://e-comserver1.onrender.com/products');
        result = await result.json();
        setProducts(result);
    }
    console.warn(products);
    const delProduct=async (id)=>{
        let result = await fetch('https://e-comserver1.onrender.com/delete-product/'+id,{
            method:"Delete"
        })
        result = await result.json();
        if(result){
            selectProduct();
        }
    }

    const setListItem =async (event)=>{
        console.warn(event.target.value)
        let key = event.target.value;
        if(key){
        let result = await fetch('http://localhost:5000/search/'+key);
        result = await result.json();
        setProducts(result);
        }else{
            selectProduct();
        }
    }
    return (
        <div className='product-list' >
            <h1>Product</h1>
            <input className='inputbox' type='text' placeholder='search product' 
            onChange={setListItem} />
            <ul className='product-l1'>
                <li className='list1'>s.no</li>
                <li className='list1'>Name</li>
                <li className='list1'>Price</li>
                <li className='list1'>Category</li>
                <li className='list1'>Company</li>
                <li className='list1'>operation</li>
            </ul>
            {
              products.length>0 ?  products.map((item, indx) =>
                    <ul className='product-l1' key={item._id}>
                        <li className='list1'>{indx+1}</li>
                        <li className='list1'>{item.name}</li>
                        <li className='list1'>{item.price}</li>
                        <li className='list1'>{item.category}</li>
                        <li className='list1'>{item.company}</li>
                        <li className='list1'><button onClick={()=>delProduct(item._id)} >Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link></li>
                    </ul>
                )
                : <h1>NO RESULT FOUND</h1>
            }
        </div>
    );
}

export default Productlist;
