import React from 'react';
import { Carousel } from 'react-bootstrap';
import Rechart from '../Rechart/Rechart';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div style={{ marginTop: "3px"}}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/wedding3.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='carousel-title'>Wedding Video Shoot</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/wedding2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='carousel-title'>Wedding Photo Shoot</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/wedding1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='carousel-title'>Full Programme Photo Shoot</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <h1 className='m-5 text-primary'> My Services Are  </h1>
                <Services></Services>
            </div>

            <div>
                <h1 className='m-5 text-primary'> My last work history of the last month </h1>
                <div className=' d-flex justify-content-center'>
                    <Rechart></Rechart>
                </div>
            </div>
        </div>
    );
};

export default Home;