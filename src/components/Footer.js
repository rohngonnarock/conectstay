import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="footer_menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/locations">Locations</NavLink></li>
                        <li><NavLink to="/hotels">Hotels</NavLink></li>
                        <li><NavLink to="/mice">Mice</NavLink></li>
                        <li><NavLink to="/food-service">Corporate Catering</NavLink></li>
                        <li><NavLink to="/cab-service">Cab Service</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>

                <div className=" text-center pptc">
                    <p>
                        <Link to="/">Privacy Ppolicy</Link>
                        <Link to="/">Terms & Conditions</Link>
                    </p>
                </div>
            </div>

            <div className="d-flex justify-content-between copyright">
                <p>Copyright © conectstay.com All right reserved.</p>
                {/* <div className="footer_social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;