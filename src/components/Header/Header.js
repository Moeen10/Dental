import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div >
            
                {/* <img src={logo} alt=""  width="20%" /> */}
            
        
       
  
  
  <Navbar bg="primary" variant="dark" fixed="top" className="color"  >
    <Container>
    <Navbar.Brand  as={Link} to="/home"><img src={logo} alt="" className="logo"  width="100px" /></Navbar.Brand>
    <Nav className="me-auto" >
      <Nav.Link as={Link} to="/home"> <>Home</></Nav.Link>
      <Nav.Link as={Link} to="/services"><>Services</></Nav.Link>
      <Nav.Link as={Link} to="/doctor"><>Doctor</></Nav.Link>
{
    user?.email ?
        //   <Nav.Link as={Link} to="/login"><>LogOut</></Nav.Link> 
        <Button onClick={logOut} variant="primary">Log Out </Button> :
          <Nav.Link as={Link} to="/login"><>Login</></Nav.Link>

}    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName }  </a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>

  </div>
    );
};

export default Header;