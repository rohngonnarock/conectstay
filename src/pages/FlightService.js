import React from 'react';
import Banner from '../components/Banner';


const FlightService = () => {
    return(
        <div classNam="page_wrapper">
                <Banner
                    img={require('../assets/img/flight.jpg')}
                    title="Flight Service" />


            <div className="container mt-5 pt-5 mb-5 pb-5">
                <h2 className="text-center mb-4">Book International and Domestic Flight Tickets from Conect stay</h2>

                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <p className="mb-4">Over the last decade, there has been a significant spike in the number of Indian flyers. Owing to the reach of the internet, people are becoming aware of the various global tourist locations, </p>
                        <p className="mb-4">Forget the hassle of going to your travel dealer; Corporate can book flights offline at Conect Stays at the most competitive prices. If you are looking to make flight bookings, then we’ve great flight offers for you! Whether domestic or international, making travel even more cost-effective.  </p>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default FlightService;