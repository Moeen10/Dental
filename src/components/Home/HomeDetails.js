
import { Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const HomeDetails = (props) => {
    // console.log(props)
   const { key,name,img,des} = props.services

    return (
        <div  className="res">
           
 <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text className="myparagraph">
      {des}
    </Card.Text>
    <br />
   <Link to={`/singleService/${key}`} > <Button variant="primary">Visit</Button>{' '}</Link>
  </Card.Body>
</Card>

 

        </div>
    );
};

export default HomeDetails;