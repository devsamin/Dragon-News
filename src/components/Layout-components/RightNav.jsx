import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNav = () => {
    return (
        <div className='space-y-2'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;