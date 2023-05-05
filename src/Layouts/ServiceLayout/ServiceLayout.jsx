/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MenuBar from '../../Pages/MenuBar/MenuBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import MainLayouts from '../MainLayouts/MainLayouts';
import Services from '../../Pages/Services/Services';
import './ServiceLayout.css'
import Home from '../../Pages/Home/Home';

const ServiceLayout = () => {
    const [servicesData, setServicesData] = useState([]);
    const services = useLoaderData();

    useEffect(() => {
      fetch("http://localhost:5000/chefs")
        .then((response) => response.json())
        .then((data) => setServicesData(data));
    }, []);
    // console.log(services);
    return (
        <div>
            <MenuBar></MenuBar>
            {/* <MainLayouts></MainLayouts> */}
            <Home></Home>
            <div className='service'>
            {
                services.map(service =>
                // <ServiceList key={service.id} service={service}></ServiceList>,
                    // console.log(service.name);
                    // <MainLayouts key = {service.id} service = { service }></MainLayouts>
                
                    // <img src={service.photo_url} alt="" />,
                    <Services key={service.id} service = { service }></Services>
                
                )
            }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ServiceLayout;