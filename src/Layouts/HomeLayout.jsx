import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/Layout-components/LeftNav';

const HomeLayout = () => {
    return (
        <div >
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12 gap-2'>
                <aside className='col-span-3'>
                    <LeftNav></LeftNav>
                </aside>
                <section className='col-span-6'>Main Nav</section>
                <aside className='col-span-3'>Right Nav</aside>
            </main>
        </div>
    );
};

export default HomeLayout;