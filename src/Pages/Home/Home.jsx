import React from 'react';
import FeaturedFoods from '../../Componeants/FeaturedFoods';
import Slider from '../../Componeants/Slider';
import Benefits from '../../Componeants/Benefits';
import ImportantInfoSection from '../../Componeants/ImportantInfoSection';

const Home = () => {
    return (
        <div>
          
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>

            <Benefits></Benefits>

            <ImportantInfoSection></ImportantInfoSection>
        </div>
    );
};

export default Home;