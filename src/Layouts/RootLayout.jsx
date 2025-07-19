import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;