/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MenuBar from '../../Pages/MenuBar/MenuBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import MainLayouts from '../MainLayouts/MainLayouts';
import Services from '../../Pages/Services/Services';
import './ServiceLayout.css'
import Home from '../../Pages/Home/Home';
import Footer from '../../Pages/Footer/Footer';
import useTitle from '../../Hooks/useTitle';

const ServiceLayout = () => {
    const [servicesData, setServicesData] = useState([]);
    const services = useLoaderData();
    useTitle('Home');

    useEffect(() => {
        fetch("https://taste-of-japan.vercel.app/chefs")
            .then((response) => response.json())
            .then((data) => setServicesData(data));
    }, []);
    // console.log(services);
    return (
        <div className='bg-black'>
            <MenuBar></MenuBar>
            <Home></Home>
            <Outlet></Outlet>
            <h1 className=' bar'>Our Chefs</h1>
            <div className='service'>
                {
                    services.map(service =>
                        <Services key={service.id} service={service}></Services>
                    )
                }
            </div>

            <Footer />
        </div>
    );
};

export default ServiceLayout;