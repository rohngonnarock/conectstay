import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


const Header = () => {

    const handleMenuOpen = () => document.body.classList.add('menu_open');
    const handleMenuClose = () => document.body.classList.remove('menu_open');

    return(
        <header>
            <i className="fa fa-bars menu_icon" onClick={handleMenuOpen} />
            <div className="d-flex justify-content-between top_header">
                <div>
                    <a href="#"><i className="fa fa-mobile" /> +91 9816 892 387</a>
                </div>
                <div>
                    <a href="mailto: reservation@conectstay.com"><i className="fa fa-envelope" /> reservation@conectstay.com</a>
                </div>
            </div>


            <div className="main_header">
                <div className="main_logo">
                    <Link to="/">CoNectstay.<span>com</span></Link>
                </div>
                <div className="main_menu">
                    <i className="fa fa-times cm_close_menu" onClick={handleMenuClose} />
                    <ul>
                        <li><NavLink onClick={handleMenuClose} exact to="/">Home</NavLink></li>
                        <li><NavLink onClick={handleMenuClose} exact to="/about">About Us</NavLink></li>
                        <li><NavLink onClick={handleMenuClose} exact to="/locations">Locations</NavLink></li>
                        <li><NavLink onClick={handleMenuClose} exact to="/hotels">Hotels</NavLink></li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                Services
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="javascript:void(0);"><NavLink onClick={handleMenuClose} exact to="/mice">Mice</NavLink></Dropdown.Item>
                                    <Dropdown.Item href="javascript:void(0);"><NavLink onClick={handleMenuClose} exact to="/food-service">Corporate Catering</NavLink></Dropdown.Item>
                                    <Dropdown.Item href="javascript:void(0);"><NavLink onClick={handleMenuClose} exact to="/cab-service">Cab service</NavLink></Dropdown.Item>
                                    <Dropdown.Item href="javascript:void(0);"><NavLink onClick={handleMenuClose} exact to="/flight-service">Flight service</NavLink></Dropdown.Item>
                                    {/* <Dropdown.Item href="javascript:void(0);"><NavLink onClick={handleMenuClose} exact to="/train-service">Train service</NavLink></Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li><NavLink onClick={handleMenuClose} exact to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>


        </header>
    )
}

export default Header;