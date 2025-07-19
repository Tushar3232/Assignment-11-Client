import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeaturedFood from './featuredFood';
import { Link } from 'react-router';

const FeaturedFoods = () => {
    const  [featuredFoods, setFeaturedFoods]= useState([])
    useEffect(()=>{
        axios.get("https://assignment-11-server-bay-psi.vercel.app/featured-foods")
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
                <div className="text-center my-10">
                <Link
                    to="/availableFoods"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                >
                    See All
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;