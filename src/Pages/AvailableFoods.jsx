import React from 'react';
import { useLoaderData } from 'react-router';
import AvailableFoodCard from '../Componeants/AvailableFoodCard';

const AvailableFoods = () => {
    const AvailableFoods = useLoaderData();
    console.log(AvailableFoods)
    return (
        <div className=' min-h-screen'>
            <h1 className=' text-7xl text-center my-30'>Available Foods</h1>
          <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 '>
              {

                AvailableFoods.map(foodData => <AvailableFoodCard key={foodData._id} foodData={foodData}></AvailableFoodCard>)
            }
          </div>
        </div>
    );
};

export default AvailableFoods;