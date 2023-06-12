import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const Logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <>
            <img className='logo_style' src='https://webilistic.com/assets/images/portfolio-new/e-commerce/7.jpg'
                alt='logo' />
            {auth ?
                <ul className="nav-ul">
                    <l1 className="bar"><Link className='nav' to="/">Products</Link></l1>
                    <l1 className="bar"><Link className='nav' to="/add">Add product</Link></l1>
                    <l1 className="bar"><Link className='nav' to="/update">Update product</Link></l1>
                    <l1 className="bar"><Link className='nav' to="/profile">Profile</Link></l1>
                    <l1><Link onClick={Logout} className='nav' to="/signup">Logout ({((JSON.parse(auth).name))})</Link></l1>
                </ul>
                :
                <ul className="nav-ul">
                    <l1><Link className='nav' to="/signup">signup</Link></l1><l1><Link className='nav' to="/login" >Login</Link></l1>
                </ul>
            }
        </>
    );
}

export default Nav;