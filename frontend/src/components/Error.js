import React from 'react';
import {Link} from 'react-router-dom';

const Error = ()=>{
    return(
        <div className='error-box'>
            <h2 className='error-con'>
                Choose the Product you wish to make changes , By clicking on the Product list Below
            </h2>
            <Link className='link-page' to="/"> Product list</Link>
        </div>
    );
}

export default Error;