import React from 'react';
import doctorImg from './../../../assets/images/doctor.jpg'

const Doctor = () => {
    return (
        <div className="container py-5">
            <div class="d-flex mt-5 justify-content-center "><h1>About Hospital</h1></div>
            <div class="card mb-12 mt-5" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={doctorImg} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex align-items-center ">
                        <div class="card-body ">
                            <h5 class="card-title">About Our Hospital</h5>
                            <p class="card-text">Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.

                                To better serve the wide-ranging needs of the community, the modern hospital has often developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. In addition, “bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery. Patients arrive at the facility for short appointments. They may also stay for treatment in surgical or medical units for part of a day or for a full day, after which they are discharged for follow-up by a primary care health provider.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;