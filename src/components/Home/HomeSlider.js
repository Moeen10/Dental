import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'

const HomeSlider = (props) => {
    return (
        <div className="slide">
             <Carousel>
  <Carousel.Item>



  <img
      className="d-block w-100"
      src={img2}
              alt="Second slide"
    />

    <Carousel.Caption>
      <h3>happy Teeth Smile</h3>
    
    </Carousel.Caption>





 
  </Carousel.Item>
  <Carousel.Item>
    

  <img
      className="d-block w-100"
        src={img1}  
    alt="Third slide"
    />

   
    <Carousel.Caption>
      <h3>Bad Breath</h3>
    </Carousel.Caption>








  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img3}  
            alt="First slide"
    />

    <Carousel.Caption>
      <h3>Gum Disease</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default HomeSlider;
