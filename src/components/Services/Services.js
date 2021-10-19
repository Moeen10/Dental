import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceShow from './ServiceShow';

const Services = () => {

    const [services,setServices] = useState([])

    useEffect(() => {
        fetch('./disease.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, []);

    return (
            <div >
            <span></span>
            <div className="res mt-2">
            {
                
                services.map(service => <ServiceShow
                    key = {service.key}
                     services={service}/>)
            }

            </div>
            
        </div>
    );
};

export default Services;




    