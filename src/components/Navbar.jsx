import React, { useContext } from 'react';
import { Link, Links } from 'react-router-dom';
import proFileLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext)
    return (
        <div className='flex justify-between'>
            {/* <h2>{import.meta.env.VITE_NAME}</h2> */}
            <div className='font-semibold'>{user && user.email}</div>
            <div className='nav space-x-4 items-center'>
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <img className='w-12 rounded-full' src={user? user.photoURL : proFileLogo} alt="" />
                {
                    user && user.email? <button onClick={logoutUser} className='btn btn-neutral'>Logout</button> : 
                    <Link to={'/auth/login'} className='btn btn-neutral'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;