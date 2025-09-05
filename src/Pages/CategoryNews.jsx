import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>Category {data.length} New Found This Specific Category</h2>
        </div>
    );
};

export default CategoryNews;