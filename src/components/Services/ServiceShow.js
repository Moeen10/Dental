import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const ServiceShow =  (props) => {
    // console.log(props)
   const {key,name,img,des} = props.services

    return (
        <div  className="res mt-5">
            
 <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text >
      {des}
    </Card.Text>
    <Link to={`/singleService/${key}`} > <Button variant="primary">Visit</Button>{' '}</Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default ServiceShow;



