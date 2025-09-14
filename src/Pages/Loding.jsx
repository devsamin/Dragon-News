import React from 'react';

const Loding = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
            <p className="mt-4 text-black text-lg font-semibold">Loading, please wait...</p>
        </div>
    );
};

export default Loding;