import React from 'react';
import Banner from '../components/Banner';


const TrainService = () => {
    return(
        <div classNam="page_wrapper">
                <Banner
                    img={require('../assets/img/taxi.jpg')}
                    title="Train Service" />


            <div className="container mt-5 pt-5 mb-5 pb-5">
                <h2 className="text-center mb-4">Corporate Cab Services</h2>

                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <p className="mb-4">We are committed to providing the highest standards of service to corporate customers and individual. As pioneers in the industry, we provide trained courteous drivers, well maintained clean cars and on time service. </p>
                        <p className="mb-4">In the chauffeur drive segment, Conect Stays Pvt Ltd offers airport transfers, half day and full day rentals within the city limits, inter-city journeys, monthly hiring with chauffeurs. The rental options are wide and can be customized to suit the needs of the travellers</p>

                        <ul>
                            <li>Corporate car rental services</li>
                            <li>Employee Transportation services</li>
                            <li>Large Event Transportation</li>
                            <li>Conference & Delegation Transportation</li>
                            <li>Individual Marriage & functions Transportation</li>
                        </ul>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default TrainService;