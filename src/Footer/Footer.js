import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
         
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Dental<span>Care</span></h3>

				<p class="footer-links">
					<Link to="/home" >Home</Link>
					<Link to="/login" >Login</Link>
					<Link to="/services" >Services</Link>
					<Link to="/doctor" >Doctor</Link>
				</p>

				<p class="footer-company-name">Made By Moeen © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>61/A</span> Lake Circus, Dhanmondi</p>
				</div>

				<div className="number">
					<i class="fa fa-phone"></i>
					<p>01785553517</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">umoeen3@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About DentalCare</span>
					What is meant by dental care?
Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry
				</p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
					<a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
					<a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
					<a href="https://www.github.com/"><i class="fab fa-github"></i></a>

				</div>

			</div>

		</footer>
        </div>
    );
};

export default Footer;






