import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Constexts/AuthContext';
import axios from 'axios';
import MyfoodCard from '../Componeants/MyfoodCard';

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([])
    console.log(foods)

    useEffect(() => {
        axios.get(`http://localhost:3000/my-foodsdata`, {
            headers: {
                Authorization: `Bearer ${ user.accessToken}`
            }
        })
        .then(res=> setFoods(res.data))

    }, [user])


    return (
       <div>
        <h1 className=' text-7xl text-center my-24'>My Foods</h1>
         <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
            {
                foods.map(food => <MyfoodCard food={food} key={food._id} setFoods={setFoods} ></MyfoodCard>)
            }
        </div>
       </div>
    );
};

export default MyFoods;