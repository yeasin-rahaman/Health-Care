import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const HomeServices = () => {
    const { services } = UseAuth()
    const homeServices = services.slice(0, 3)
    return (
        <div>
            <div class="d-flex mt-5 justify-content-center "><h1>Services</h1></div>
            <h2>{services.desc}</h2>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {homeServices.map(service => <div className="col" key={service.key} >
                        <div className="card h-100 hover">
                            <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.desc}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <NavLink to="/services" className="btn-grad">View Details</NavLink>
                            </div>

                        </div>
                    </div>)
                    }

                </div>
            </div >
        </div>
    );
};

export default HomeServices;