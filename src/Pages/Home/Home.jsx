import React from 'react';
import FeaturedFoods from '../../Componeants/FeaturedFoods';
import Slider from '../../Componeants/Slider';
import Benefits from '../../Componeants/Benefits';

const Home = () => {
    return (
        <div>
            <h1 className=' text-7xl text-center'>this is home</h1>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;