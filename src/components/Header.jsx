import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img className='py-3' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500'>Dragon News Papper</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;