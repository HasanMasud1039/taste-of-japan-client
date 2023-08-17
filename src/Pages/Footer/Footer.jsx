/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'


const Footer = () => {
    return (
        <div >
            <hr className='border p-2 bg-danger bg-gradient rounded  m-4'/>
            <div className='d-flex justify-content-around pb-4 mt-4 bg-dark text-white px-2 rounded-4'>

                <div className='footer1'>
                <div className='text-white fw-bold me-4 pt-4'>
                    <h2>Taste of <span className='fw-bold text-danger'>JAPAN</span></h2>
                    <h4 className='mt-4'>Find us in</h4>
                    <div className='d-flex mt-4 justify-content-around'>
                        <FaFacebook className='fs-2 mt-4 text-primary'></FaFacebook>
                        <FaYoutube className='fs-2 mt-4 text-danger '></FaYoutube>
                        <FaInstagram className='fs-2 mt-4 text-danger  bg.gradient'></FaInstagram>
                    </div>

                </div>
                <div className='text-decoration-none mt-4'>
                    <h4>Support</h4>
                    <ul className=' mt-4'>
                        <li className='my-2'>Contact Us</li>
                        <li className='my-2'>FAQ</li>
                        <li className='my-2'>FAQ</li>
                        <li className='my-2'>About Us</li>
                        <li className='my-2'>Our Branches</li>
                    </ul>
                </div>
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

                        <Form.Group className="mb-3" controlId="formBasicFeedback">
                            <Form.Label>Your feedback</Form.Label>
                            <Form.Control style={{ minHeight: '100px' }} type="text" placeholder="Your Feedback" />
                        </Form.Group>
                        <Button className="bg-white bg-gradient fs-5 fw-bold border-0 shadow text-danger mx-2" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Footer;