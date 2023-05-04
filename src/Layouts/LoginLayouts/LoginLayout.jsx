/* eslint-disable no-unused-vars */
import React from 'react';
import MenuBar from '../../Pages/MenuBar/MenuBar';
import { Outlet } from 'react-router-dom';
import MainLayouts from '../MainLayouts/MainLayouts';
import ServiceList from '../../Pages/Services/ServiceList';

const LoginLayout = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            {/* <MainLayouts props = { props }></MainLayouts> */}
            <Outlet></Outlet>

        </div>
    );
};

export default LoginLayout;