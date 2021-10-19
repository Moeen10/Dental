import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import { Button } from 'react-bootstrap';

const Registration = () => {
    return (
        <div >
        <div className="reg ">
            <h1>Register</h1>
            <form action="">
             
               <input className="mb-2" type="email" placeholder="Give your e-mail" name="" id="" />
               <br />

            
                <input className="mb-2" type="password" placeholder="Give yor password" name="" id="" />
                <br />
                <input className="mb-2" type="password" placeholder="re-enter password" name="" id="" />
                <br />
                   
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>

            <div>
            ...............or...............
            <br /><br />
            <Button className="btn-primary">Google Sign-In</Button>
        </div>
        </div>
    </div>
    );
};

export default Registration;




