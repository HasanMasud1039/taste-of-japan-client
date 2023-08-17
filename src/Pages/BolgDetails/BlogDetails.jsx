/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';

const BlogDetails = ({ blog }) => {
    // console.log(blog.id);
    useTitle('Blog');
    return (
        <div className='bg-black rounded-4  mx-2 my-4'>
            <Card style={{ height: '100%', background: 'lightBlue', margin: '20px 10px', }}>
                <Card.Img className='w-full rgba-green-strong' style={{ height: '400px' }} variant="top" src={blog.photo_url} />
                <div className='d-flex justify-content-evenly mx-4 my-2'>

                    <div className='d-flex border-0 p-2 rounded-4 shadow'>
                        <div>
                            <img className='rounded-circle mt-2' style={{ height: '80px' }} src={blog.author_photo_url} alt="" />
                        </div>

                        <div className='ms-2 mt-2'>
                            <p className='text-secondary fw-bold fs-5'>{blog.author_name}</p>
                            <p className='text-secondary fw-bold fs-6'>{blog.date}</p>
                        </div>

                    </div>
                    <div className='border-0 shadow p-2 rounded-4'>
                        <Rating className='overlay' style={{ justifyContent: 'center', maxWidth: "160px", height: '40px', marginRight: '40px', marginBottom: '10px' }} value={blog.rating} readOnly />
                        {/* <p>{blog.rating}</p> */}
                        <p className='text-secondary fw-bold ms-2 fs-6'><FaThumbsUp className='text-primary me-4 ' style={{ height: '50px', width: '30px' }}></FaThumbsUp>{blog.liked}</p>
                    </div>


                </div>
                <Card.Body>
                    <Card.Title className='fw-bold mb-4 fs-4'>{blog.title}</Card.Title>

                </Card.Body>
                <div className='mb-4 d-flex justify-content-center '>
                    <Button className=" bg-danger bg-gradient fs-5 fw-bold border-0 shadow text-danger px-4"><Link className="fs-5 fw-bold text-center border-0  text-white px-4 text-decoration-none" to={`/blog/${blog.id}`} >Details</Link></Button>
                </div>

            </Card>

        </div>

    );
};

export default BlogDetails;