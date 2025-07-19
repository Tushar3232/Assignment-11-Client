import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeaturedFood from './featuredFood';

const FeaturedFoods = () => {
    const  [featuredFoods, setFeaturedFoods]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/featured-foods")
        .then(res=> {
            setFeaturedFoods(res.data)
        })
    },[]);
   
    return (
        <div>
            <h1 className=' text-7xl text-center my-24'>Available Hight Quantity Foods </h1>
            <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto'>
                {
                    featuredFoods.map(featuredFood=> <FeaturedFood featuredFood={featuredFood} key={featuredFood._id}></FeaturedFood>)
                }
            </div>
        </div>
    );
};

export default FeaturedFoods;