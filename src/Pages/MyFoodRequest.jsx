import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';
import MyfoodCard from '../Componeants/MyfoodCard';
import RequestedFoodCard from '../Componeants/RequestedFoodCard';

const MyFoodRequest = () => {
     const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([])
    console.log(foods)

    useEffect(() => {
        axios.get(`https://assignment-11-server-bay-psi.vercel.app/my-requests`, {
            headers: {
                Authorization: `Bearer ${ user.accessToken}`
            }
        })
        .then(res=> setFoods(res.data))

    }, [user])


    return (
       <div className=' min-h-screen'>
        <h1 className=' text-7xl text-center my-30'>My riequested Foods</h1>
         <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
            {
                foods.map(food => <RequestedFoodCard food={food} key={food._id} setFoods={setFoods} ></RequestedFoodCard>)
            }
        </div>
       </div>
    );
};

export default MyFoodRequest;
