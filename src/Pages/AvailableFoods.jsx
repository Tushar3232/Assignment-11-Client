import React from 'react';
import { useLoaderData } from 'react-router';
import AvailableFoodCard from '../Componeants/AvailableFoodCard';

const AvailableFoods = () => {
    const availableFoods = useLoaderData();
    console.log(availableFoods);

    return (
        <div className="min-h-screen px-4 py-10 bg-gray-50">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold mb-10">
                Available <span className=' text-green-600'>Foods</span>
            </h1>

            <div className="max-w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {availableFoods.map(foodData => (
                    <AvailableFoodCard key={foodData._id} foodData={foodData} />
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
