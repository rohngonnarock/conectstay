import React from 'react';
import Banner from '../components/Banner';


const Locations = () => {
    return(
        <div classNam="page_wrapper">
                <Banner
                    img={require('../assets/img/cities.png')}
                    title="Locations" />


    	    <div className="container mt-5 pt-5">
                <div className="row">
                    {locations.map(item => (
                    <div className="col-lg-4 col-md-6">
                        <div className="hotel_card">
                            <img src={item.img} />  
                            <h3>{item.text}</h3>
                        </div>
                    </div>))}
                </div>
            </div>


        </div>
    )
}

export default Locations;


const locations = [
    {img: require('../assets/img/locations/mumbai.jpg'), text: 'Maharashtra'},
    {img: require('../assets/img/locations/agra.jpg'), text: 'Uttar Pradesh'},
    {img: require('../assets/img/locations/bangalore.jpg'), text: 'Karnataka'},
    {img: require('../assets/img/locations/bhubaneswar.jpg'), text: 'Odisha'},
    {img: require('../assets/img/locations/chennai.jpg'), text: 'Tamil Nadu'},
    {img: require('../assets/img/locations/delhi.jpg'), text: 'Delhi'},
    {img: require('../assets/img/locations/goa.jpg'), text: 'Goa'},
    {img: require('../assets/img/locations/gujarat.jpg'), text: 'Gujarat'},
    {img: require('../assets/img/locations/gurugram.jpg'), text: 'Gurugram'},
    {img: require('../assets/img/locations/hyderabad.jpg'), text: 'Telangana'},
    {img: require('../assets/img/locations/jaipur.jpg'), text: 'Rajasthan'},
    {img: require('../assets/img/locations/kerala.jpg'), text: 'Kerala'},
    {img: require('../assets/img/locations/kolkata.jpg'), text: 'Kolkata'},
    {img: require('../assets/img/locations/noida.jpg'), text: 'Noida'},
    {img: require('../assets/img/locations/punjab.jpg'), text: 'Punjab'},
]