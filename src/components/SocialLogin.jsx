import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2>Social Login</h2>
            <div className='flex flex-col space-y-2 *:w-full mt-2'>
                <button className='btn'><FaGoogle></FaGoogle>Login With Google</button>
                <button className='btn'><FaGithub></FaGithub>Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;