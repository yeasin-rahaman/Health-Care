import React from 'react';
import patientImg from './../../../assets/images/patient.jpg'
import './Patint.css'

const Patient = () => {
    return (
        <div className="py-5">
            <div id="subscribe" class="container d-flex justify-content-center bg-panda-header align-items-center rounded-3 text-center">
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get updates on sales specials and more</p>
                    <input class="form-control input-panda" type="text" placeholder="Your email" />
                    <br />
                    <button class="btn btn-grad">Submit</button>
                </div>

            </div>


            <div class="card  my-5 h-50 text-center my-auto mt-5 mb-5" >
                <img src={patientImg} class="card-img  patient-img" alt="..." />
                <div class="card-img-overlay container custom-card ">
                    <h5 class="card-title">Who has best doctors in the world?</h5>
                    <p class="card-text">Ranking which countries have the best doctors in the world is a difficult task. The topic is simply too broad to come up with a definitive and accurate list.</p>

                </div>
            </div>
        </div >
    );
};

export default Patient;