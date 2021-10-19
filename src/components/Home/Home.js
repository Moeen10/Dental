import HomeDetails from './HomeDetails';
import HomeSlider from './HomeSlider';
import React, { useEffect, useState } from 'react';
import './Home.css'
// import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  
    const [services,setServices] = useState([])

    useEffect(() => {
        fetch('./disease.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, []);
    
    return (
        <div>


            
            <HomeSlider/>
<br />
            <h1>Services</h1>
            <div className="res">
            
            {
                
                services.map(service => <HomeDetails
                    key = {service.key}
                     services={service}/>)
            }
            </div>
           
    

    
            
           
           
            
          
        </div>
    );
};

export default Home;