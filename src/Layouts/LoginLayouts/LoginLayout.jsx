/* eslint-disable no-unused-vars */
import React from 'react';
import MenuBar from '../../Pages/MenuBar/MenuBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';


const LoginLayout = () => {
    return (
        <div className='bg-dark'> 
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;