/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Button, Card, Container } from 'react-bootstrap';
import { FaBeer, FaCookie, FaCookieBite, FaHandHoldingHeart, FaHeart, FaRegGrinHearts, FaSuitcase, FaSuse, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = ({ service }) => {

    // console.log(service);


    return (
        <Container className='container1 w-full bg-black '>
            {
                typeof (service) !== "undefined" ?

                    <Card style={{ borderRadius: '20px', marginBottom: '20px', backgroundColor: 'White'}}>
                        <Card.Img style={{ width: '100%', margin: 'auto', height: "16rem", borderRadius: '20px' }} variant="top" src={service.photo_url} />
                        <Card.Body style={{ margin: '10px' }}>
                            <Card.Title className='name fw-bold mb-4 text-center rounded py-2'><h2>{service.name}</h2></Card.Title>
                            <div className='d-flex justify-content-around my-2'>
                                <div className='box text-center p-2 rounded'>
                                    <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black', marginRight: '15px' }}> <FaSuitcase style={{ marginRight: '10px', color: 'slateblue' }}></FaSuitcase>
                                        {service.years_of_experience} years
                                    </Card.Text>
                                </div>
                                <div className='box text-center p-2 rounded'>
                                    <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black', marginRight: '10px' }}>
                                        <FaCookieBite style={{ color: 'slateblue', marginRight: '10px' }}></FaCookieBite>
                                        {service.num_recipes} unique recipes
                                    </Card.Text>
                                </div>
                                <div className='box text-center p-2 rounded'>
                                    <Card.Text style={{ fontSize: "18px", fontWeight: 'bold', color: 'black' }}>
                                        <FaThumbsUp style={{color: 'slateblue', marginRight: '10px' }} />
                                        {service.num_likes}
                                    </Card.Text>
                                </div>
                            </div>
                            <Card.Text className='fs-6 fw-bold text-secondary mt-4 '>{service.details}</Card.Text>
                            

                        </Card.Body>
                        <Button className='fw-bold border-0 fs-4 shadow text-white p-2 my-4 mx-auto rounded w-75 bg-danger bg-gradient'><Link style={{ color:'white',textDecoration: 'none' }} to={`/services/${service.id}`} >View Recipes</Link></Button>
                    </Card>
                    : <></>
            }


        </Container>
    );
};

export default Services;