import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeaturedFood from './featuredFood';
import { Link } from 'react-router';

const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([])
    useEffect(() => {
        axios.get("https://assignment-11-server-bay-psi.vercel.app/featured-foods")
            .then(res => {
                setFeaturedFoods(res.data)
            })
    }, []);

    return (
        <div>
            <h2 className="text-5xl font-bold text-gray-900 text-center my-24">
                Hight <span className="text-green-600">Quantity</span>
                <br /> Foods
            </h2>
            
            <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-9/12 mx-auto'>
                {
                    featuredFoods.map(featuredFood => <FeaturedFood featuredFood={featuredFood} key={featuredFood._id}></FeaturedFood>)
                }

            </div>
            <div className="text-center max-w-9/12 mx-auto my-10">
                <Link
                    to="/availableFoods"
                    className="border border-green-600 text-green-600 hover:bg-green-50 px-5 py-2 rounded-lg font-semibold transition"
                >
                    See All
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;