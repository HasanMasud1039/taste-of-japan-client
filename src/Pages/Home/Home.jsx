/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import jFood1 from '../../assets/j1.jpg';
import jFood2 from '../../assets/j2.jpg';
import jFood3 from '../../assets/j3.jpg';
import jFood4 from '../../assets/j4.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='carousel d-flex border-light p-2 mb-4 m-2 rounded-4 bg-gradient'>
            <div className=' m-4 rounded col-4'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="jFood position-relative rounded d-block w-100 "
                            src={jFood1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='caption'>
                            <h5>Yakitori</h5>
                            <p>Yakitori made from chicken offal have traditionally been predominant, though thanks to the sweet soy and mirin glaze commonly used</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded d-block w-100"
                            src={jFood4}
                            alt="First slide"
                        />
                        <Carousel.Caption  className='caption'>
                            <h5>Tempura</h5>
                            <p>The joys of fried food are shared worldwide, and Japan does it exceptionally well with tempura.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded d-block w-100"
                            src={jFood2}
                            alt="Second slide"
                        />
                        <Carousel.Caption  className='caption'>
                            <h5 >Sushi & Sashimi</h5>
                            <p> Sushi and Sashimi are often served together as two of the more common Japanese dishes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" rounded d-block w-100"
                            src={jFood3}
                            alt="Third slide"
                        />
                        <Carousel.Caption  className='caption'>
                            <h5>Sukiyaki</h5>
                            <p>
                                There s a good chance of eating sukiyaki on New Year s Day in Japan, athe beef dish, significant regional distinctions as to the cooking method
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='m-4 fs-5 fw-light'>
                <p className='description'>Japanese food culture is renowned for its focus on fresh, seasonal ingredients and beautifully presented dishes.
                    Traditional Japanese meals typically include rice, miso soup, and a main dish such as grilled fish or meat.
                    Additionally, sushi and sashimi are well-known Japanese foods that are typically made with raw fish served with vinegar-seasoned rice and soy sauce.
                    Another popular dish in Japanese cuisine is ramen, a noodle soup dish that features a flavorful broth and various toppings.
                    Japanese food is also known for its healthy qualities, with many dishes incorporating vegetables, seafood, and other wholesome ingredients.
                     </p>
            </div>
        </div>
        
    );
};

export default Home;