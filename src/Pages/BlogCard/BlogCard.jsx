/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Button, Card } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaThumbsUp, FaYoutube } from 'react-icons/fa';
import './BlogCard.css'

const BlogCard = () => {
    const blog = useLoaderData();
    const id = useParams();
    useTitle('Blog Details');
    console.log(blog[0].author_name);
    return (
        <div className='body '  >
            <Card style={{ background: 'lightBlue', margin: '10px 10px', width: '90%' }}>
                <Card.Img className='w-full rgba-green-strong' style={{ height: '400px' }} variant="top" src={blog[0].photo_url} />
                <div className='d-flex justify-content-evenly mx-4 my-2'>


                </div>
                <Card.Body>
                    <Card.Title className='fw-bold mb-4 fs-4'>{blog[0].title}</Card.Title>
                    <Card.Text>{blog[0].description}</Card.Text>
                </Card.Body>
            </Card>
            <div className='author' >
                <div className='rounded-lg'>
                    <img className='w-100 rounded h-25' src={blog[0].author_photo_url} alt="" />
                </div>
                <table className='mt-4'>

                        <tr >
                            <td className=' border border-0 shadow   p-2'>Author</td>
                            <td className=' border border-0 shadow fw-bold  p-2'>{blog[0].author_name}</td>
                        </tr>
                        <tr >
                            <td className=' border border-0 shadow p-2'>Author ID</td>
                            <td className=' border border-0 shadow p-2'>{blog[0].author_id}</td>
                        </tr>
                        <tr className=''>
                            <td className=' border border-0 shadow p-2'>Category</td>
                            <td className=' border border-0 shadow p-2'>{blog[0].category}</td>
                        </tr>
                        <tr >
                            <td className=' border border-0 shadow my-4 p-2'>Rating </td>
                            <td className=' border border-0 shadow my-4 p-2'>{blog[0].rating}</td>
                        </tr>
                        <tr >
                            <td className=' border border-0 shadow my-4 p-2'>Liked</td>
                            <td className=' border border-0 shadow  p-2'>{blog[0].liked}</td>
                        </tr>


                </table>
                <div className='d-flex justify-content-around my-4'>
                            <div className=' border border-0 fs-3 shadow p-2 text-primary'><Link to={`https://www.facebook.com`}><FaFacebook></FaFacebook></Link></div>
                            <div className='text-primary  border fs-3 border-0 shadow  p-2'><Link to={`https://www.linkedin.com`}><FaLinkedin></FaLinkedin></Link></div>
                            <div className='text-danger border border-0 fs-3 shadow  p-2'><Link to={`https://www.youtube.com`}><FaYoutube className='text-danger'></FaYoutube></Link></div>
                            <div className='text-danger border border-0 fs-3 shadow  p-2'><Link to={`https://www.instagram.com`}><FaInstagram className='text-danger'></FaInstagram></Link></div>
                        </div>
                {/* <div className='d-flex justify-content-between'>
                    <h5>Author:</h5> <h5>{blog.author_name}</h5>
                    
                </div>
                <div className='d-flex justify-content-between'>
                    <h5>Author:</h5> <h5>{blog.author_name}</h5>
                    
                </div> */}

                <div>


                </div>
            </div>
        </div>
    );
};

export default BlogCard;