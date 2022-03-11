import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>
        fetch('/servicedetails.json')
            .then(res => res.json())
            .then(data => setServices(data))
        , [])
    return (
        <div className="container my-4">
            <div className='text-center text-danger'>
                <h2>CULTURAL PARK SERVICES</h2>
            </div>
            <div className="row g-4 my-4">
                {
                    services.map((service =>
                        <Service
                            service={service}
                        ></Service>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;