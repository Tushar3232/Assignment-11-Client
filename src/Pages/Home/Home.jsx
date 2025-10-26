import React from 'react';
import FeaturedFoods from '../../Componeants/FeaturedFoods';
import Slider from '../../Componeants/Slider';
import Benefits from '../../Componeants/Benefits';
import ImportantInfoSection from '../../Componeants/ImportantInfoSection';
import HeroSection from './HeroSection';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import OurSuccess from './OureSuccess';
import OurVolunteers from './OurVolunteers';
import CoverageSection from './CoverageSection';

const Home = () => {
    return (
        <div>
          
            {/* <Slider></Slider> */}
            <HeroSection></HeroSection>
            <FeaturedFoods></FeaturedFoods>

            <AboutUs></AboutUs>

            <Benefits></Benefits>
            <OurSuccess></OurSuccess>
            <OurVolunteers></OurVolunteers>

            <ImportantInfoSection></ImportantInfoSection>
            <CoverageSection></CoverageSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;