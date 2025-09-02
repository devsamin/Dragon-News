import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center  bg-base-200 p-2 '>
            <p className='bg-[#D72050] text-white px-3 py-1'>Latests</p>
            <Marquee pauseOnHover={true} className='space-x-10'><Link to={'/news'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptas?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link to={'/news'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptas?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <Link to={'/news'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptas?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;