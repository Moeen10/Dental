import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css'
const DoctorDetails = (props) => {
    const {name,deg,ex,img} = props.doctor
    return (
        <div>
           
            <Card className="text-dark mb-5">
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay>
      <br />
      
    <Card.Title className="mt-5 text-dark"><h3><b>{name}</b></h3></Card.Title>
    <Card.Text>
      {ex}
    </Card.Text>
    <Card.Text ><b>{deg}</b></Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default DoctorDetails;