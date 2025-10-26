import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';
import MyfoodCard from '../Componeants/MyfoodCard';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.accessToken) return;

        const fetchFoods = async () => {
            try {
                const res = await axios.get(
                    'https://assignment-11-server-bay-psi.vercel.app/my-foodsdata',
                    { headers: { Authorization: `Bearer ${user.accessToken}` } }
                );
                setFoods(res.data);
            } catch (err) {
                console.error('Error fetching foods:', err);
            }
        };
        fetchFoods();
    }, [user]);

    return (
        <div className="min-h-screen pt-24 pb-16 px-4">
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold my-12">
                My <span className="text-green-600">Foods</span>
            </h1>

            {/* Add Food Button */}
            <div className="flex justify-center md:justify-end mb-8 max-w-7xl mx-auto">
                <button
                    onClick={() => navigate('/addfood')}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                    <Plus className="w-5 h-5" /> Add Food
                </button>
            </div>

            {/* Foods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {foods.length > 0 ? (
                    foods.map(food => (
                        <MyfoodCard
                            food={food}
                            key={food._id}
                            setFoods={setFoods}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        You have not added any foods yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyFoods;
