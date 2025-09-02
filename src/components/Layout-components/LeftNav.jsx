import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className='font-semibold'>All Category ({categories.length})</h2>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    categories.map(caterogy=> <NavLink to={`/category/${caterogy.category_id}`} className='btn' key={caterogy.category_id}>
                        {caterogy.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
//     category_id
// : 
// "01"
// category_name
// : 
// "Breaking News"
};

export default LeftNav;