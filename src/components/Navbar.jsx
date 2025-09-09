import React from 'react';
import { Link, Links } from 'react-router-dom';
import proFileLogo from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between'>
            
            <div></div>
            <div className='nav space-x-4 items-center'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <img src={proFileLogo} alt="" />
                <Link to={'/auth/login'} className='btn btn-info'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;