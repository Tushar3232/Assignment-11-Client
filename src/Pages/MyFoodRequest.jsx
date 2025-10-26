import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';
import RequestedFoodCard from '../Componeants/RequestedFoodCard';

const MyFoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        if (!user?.accessToken) return;

        const fetchRequests = async () => {
            try {
                const res = await axios.get(
                    'https://assignment-11-server-bay-psi.vercel.app/my-requests',
                    { headers: { Authorization: `Bearer ${user.accessToken}` } }
                );
                setFoods(res.data);
            } catch (err) {
                console.error('Error fetching requested foods:', err);
            }
        };

        fetchRequests();
    }, [user]);

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold my-12">
                My <span className="text-green-600">Requested Foods</span>
            </h1>

            {/* Requested Foods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {foods.length > 0 ? (
                    foods.map(food => (
                        <RequestedFoodCard
                            food={food}
                            key={food._id}
                            setFoods={setFoods}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        You have not requested any foods yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyFoodRequest;
