import React from 'react';
import ourDoctor1 from './../../../assets/images/otrdoctor(1).jpg'
import ourDoctor2 from './../../../assets/images/otrdoctor(2).jpg'
import ourDoctor3 from './../../../assets/images/otrdoctor(3).jpg'
import ourDoctor4 from './../../../assets/images/otrdoctor(4).jpg'

const OurDoctors = () => {
    return (
        <div className='container py-5'>
            <div class="d-flex my-5 justify-content-center"><h1>Our Doctors</h1></div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={ourDoctor1} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DR. BEATRICE PRIOR</h5>
                            <p class="card-text">Dental Hygienist</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={ourDoctor2} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DR. EDWARD DUGHLAS</h5>
                            <p class="card-text">Orthopedic Surgeon</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={ourDoctor3} class="card-img-top img-fluid img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DR. PETER PARKER</h5>
                            <p class="card-text">Health Care</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 hover">
                        <img src={ourDoctor4} class="card-img-top img-fluid img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DR. LIZA THOMAS</h5>
                            <p class="card-text">Patient Services Manager</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurDoctors;