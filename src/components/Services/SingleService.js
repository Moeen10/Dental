import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import Output from './Output';

const SingleService = () => {
    const {serviceId} =useParams()
    const [details, setDetails] = useState([])
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('/disease.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    console.log("ami",details)

    useEffect(() => {
        const getDetails = details.find(detail => detail.key ==serviceId)
        setService(getDetails)
    }, [details])

console.log("le ",service)

    return (

       <div className="up">
            <Card className="bg-dark text-white">
    <Card.Img src={service?.img} alt="Card image" />
    <Card.ImgOverlay>
  <Card.Title>{service?.name}</Card.Title>
  <Card.Text>
  {service?.des}
  </Card.Text>
</Card.ImgOverlay>
</Card>
<br />
<br />

<Link to="/home"><Button>Home</Button></Link> 
       </div>
    );
};
export default SingleService;





  

          