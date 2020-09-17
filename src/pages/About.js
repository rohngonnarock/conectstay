import React from 'react';
import Banner from '../components/Banner';


const About = () => {
    return(
        <div classNam="page_wrapper">
                <Banner
                    img={require('../assets/img/hotel-13.jpg')}
                    title="About Us"/>



            <div className="container mt-5 pt-5 mb-5 pb-5">
                <h2 className="text-center mb-4">Welcome to Conect Stay</h2>

                <p>Conect Stays Pvt Ltd provides the Corporate Travel management solutions in which we manage a company’s strategic approach to travel ,cost benefits for client company, maximum satisfaction to travellers while fulfilling their requirement with prompt revert and providing them preferred solutions at within corporate travel policies, Round the clock support. Additionally we assist in obtaining maximum benefits from using Hotels and vendors. We ensure excellent management for day to day operation of the corporate travel program, traveller’s convenience, prompt information on various updates/changes information. </p>

                <ul className="mt-5">
                    <li>Cost Competitive Travel Services</li>
                    <li>24 Hours Support round the year.</li>
                    <li>Strong Relationship with individual and chain of Hotels</li>
                    <li>Pioneer in corporate travel solutions</li>
                    <li>One stop for all travel related needs</li>
                </ul>
            

            </div>


        </div>
    )
}

export default About;