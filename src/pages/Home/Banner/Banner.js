import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from './../../../assets/images/Banner/1.png';
import banner2 from './../../../assets/images/Banner/2.png';
import banner3 from './../../../assets/images/Banner/3.png';

const Banner = () => {
    return (
        <div className="banner pb-5">
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Best Doctors</h3>
                            <p>Get an Expert Medical Opinion from one of our world-renowned specialists so you can have the answers and confidence to make informed decisions about your health.Nulla vitae </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Best Care</h3>
                            <p>It is possible to improve and cure health when you are sick. But it is not possible for your health to remain healthy forever. You can get rid of the disease and there are some diseases that can cause you to die.</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Best Treatment</h3>
                            <p>You will have to go through a lot of trouble to find a suitable doctor by visiting the hospital during your illness. Gratefully, here we have made a list of the top 10 doctors in Bangladesh. With this list, you can easily choose a good doctor and helps you to make an appointment with them.</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;