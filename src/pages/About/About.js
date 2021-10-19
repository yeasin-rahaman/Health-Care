import React from 'react';
import about from './../../assets/images/about.jpg'
const About = () => {
    return (
        <div>
            <div class="about-container custom-body">
                <div class="d-flex mt-5 justify-content-center">
                    <h1 class="edu">About Us </h1>
                </div><section class="hero-banner py-5 mt-5">
                    <div class="container">
                        <div class="row row align-items-center">
                            <div class="col-lg-5 offset-lg-1 order-lg-1">
                                <img src={about} class="img-fluid" alt="Web Development" />
                            </div>
                            <div class="col-lg-6">
                                <h1 class="mt-3">The Health Care Hospital</h1>
                                <p class=" my-5">The success of hospitals and healthcare providers depends on the quality of their service. But in an age where most of us look up information online before making almost any decision, a well-designed healthcare website is no less important.

                                    Most of the people visit a hospital website to get information. So these sites must be very user-friendly, easy to navigate and extremely well-organised with a pleasing aesthetics.

                                    Based on these criteria we’ve listed some of the best medical and healthcare websites, mostly from Australia. Any website for a doctor’s clinic or a hospital can follow the good parts of these sites.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;