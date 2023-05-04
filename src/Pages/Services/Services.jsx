/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Button, Card, Container } from 'react-bootstrap';
import { FaBeer, FaCookie, FaCookieBite, FaHandHoldingHeart, FaHeart, FaRegGrinHearts, FaSuitcase, FaSuse, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {

    console.log(service);

    return (
        <Container style={{display:'flex'}}>
            {
                typeof (service) !== "undefined" ?

                    <Card style={{borderRadius: '20px' , marginBottom:'20px' ,backgroundColor:'skyblue', width: '24rem' }}>
                        <Card.Img style={{ width: '100%', margin: 'auto', height: "16rem", borderRadius: '20px' }} variant="top" src={service.photo_url} />
                        <Card.Body style={{margin: '20px'}}>
                            <Card.Title><h1>{service.name}</h1></Card.Title>
                            <Card.Text style={{fontSize: "18px" ,fontWeight:'bold', color: 'black' }}> <FaSuitcase style={{ marginRight: '10px', color: 'blue' }}></FaSuitcase>
                                {service.years_of_experience} years
                            </Card.Text>
                            <Card.Text style={{fontSize: "18px" ,fontWeight:'bold', color: 'black' }}> 
                            <FaCookieBite style={{color:'blue', marginRight:'10px'}}></FaCookieBite>
                                {service.num_recipes} unique recipes
                            </Card.Text>
                            <Card.Text style={{fontSize: "18px" ,fontWeight:'bold', color: 'black' }}> 
                            <FaThumbsUp style={{color:'blue', marginRight:'10px'}}/>
                                {service.num_likes}
                            </Card.Text>
                            <Button style={{fontWeight:'bold',fontSize:'16px', padding:"10px", borderRadius:'5px',color:'White', backgroundColor:'maroon' }} variant="primary"><Link to='/serviceDetails'>View Recipes</Link></Button>
                        </Card.Body>
                    </Card>
                    : <></>
            }


        </Container>
    );
};

export default Services;