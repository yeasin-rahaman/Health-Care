import React from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';


const Details = () => {
    const { id } = useParams()
    const { services } = UseAuth()
    const serviceDetails = services?.find((service) => service.key === Number(id));
    const selected = serviceDetails?.title;

    return (
        <div>

            {selected ? (
                <div className="container my-5">
                    <div class="card mb-3">
                        <img src={serviceDetails.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-title">{serviceDetails.title}</h1>
                            <p class="card-text">{serviceDetails.desc}</p>
                        </div>
                    </div>
                </div>
            ) : <h1>No data found</h1>}
        </div >
    );
};

export default Details;