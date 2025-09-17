import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/Layout-components/LeftNav';
import RightNav from '../components/Layout-components/RightNav';
import CategoryNews from '../Pages/CategoryNews';
import { Outlet, useNavigation } from 'react-router-dom';
import Loding from '../Pages/Loding';

const HomeLayout = () => {
    const {state} = useNavigation()
    console.log(state)
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
                <section className='col-span-6'>
                   {state =="loading" ? <Loding></Loding> : <Outlet />} 
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;