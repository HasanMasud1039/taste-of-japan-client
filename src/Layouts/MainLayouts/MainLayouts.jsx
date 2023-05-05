/* eslint-disable no-unused-vars */
import React from 'react';
import Menubar from '../../Pages/MenuBar/MenuBar';
import Home from '../../Pages/Home/Home';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Footer from '../../Pages/Footer/Footer';

const MainLayouts = () => {

    return (
        <div>
            <Menubar></Menubar>
            <Home></Home>
            <ServiceDetails></ServiceDetails>
            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;