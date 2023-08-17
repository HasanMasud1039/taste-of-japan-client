/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import BlogDetails from '../BolgDetails/BlogDetails';
import './Blog.css'
import { Button, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Blog = () => {
    const loadedBlogs = useLoaderData();
    // console.log(loadedBlogs);
    return (
        <div >
            <Outlet></Outlet>
            <div className='text-white d-flex me-4 mt-4 justify-content-end fs-5'>
                {/* <form cla action="" placeholder='Search'>aa</form> */} 
                <Form className='text-dark border border-1 w-25 rounded-3 ms-2 p-1 bg-white' placeholder='Seacrch'><FaSearch style={{height:'25px', paddingLeft:'5px'}}></FaSearch></Form>
                <Button className='bg-danger border-0 fw-bold fs-5 ms-2 bg-gradient'>Search</Button>
            </div>
            <div className='content text-white m-4' >
                    <p className='border-1 border  p-2 text-center rounded'>Traditional Food <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>12</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Occasional Food <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>7</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Famous Food <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>6</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Food Culture <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>10</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Food Manners <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>11</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Rare Foods <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>10</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Food History <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>7</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Japanese Cuisine <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>8</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Foreign Taste <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>6</span></p>
                    <p className='border-1 border  p-2 text-center rounded'>Street Food <span className='bg-white text-dark rounded-circle p-1 fw-bold mx-2'>5</span></p> 
                </div>
            <div className= 'blogs h-full '>
            {
                loadedBlogs.map(blog =><BlogDetails key={blog.id} blog = { blog } ></BlogDetails>)
            }
            </div>
        </div>
    );
};

export default Blog;