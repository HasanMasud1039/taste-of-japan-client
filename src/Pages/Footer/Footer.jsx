/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='d-flex justify-content-around mb-4 mt-4 bg-dark text-white p-2 rounded-4'>
            <div className='text-white fw-bold m-4'>
                <h3>Taste of <span className='fw-bold text-danger'>JAPAN</span></h3>
                <div className='d-flex mt-4 justify-content-around'>
                    <FaFacebook className='fs-2 mt-4 text-primary'></FaFacebook>
                    <FaYoutube className='fs-2 mt-4 text-danger '></FaYoutube>
                    <FaInstagram className='fs-2 mt-4 text-danger  bg.gradient'></FaInstagram>
                </div>

            </div>
            <div className='text-decoration-none mt-4'>
                <h4>Support</h4>
                <ul >
                    <li className='my-2'>Contact Us</li>
                    <li className='my-2'>FAQ</li>
                    <li className='my-2'>FAQ</li>
                    <li className='my-2'>About Us</li>
                    <li className='my-2'>Our Branches</li>
                </ul>
            </div>
            <div className='mt-4'>
                <h4>Feedback</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your feedback</Form.Label>
                        <Form.Control type="text" placeholder="Your Feedback" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Footer;