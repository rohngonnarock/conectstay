import React from 'react';
import Banner from '../components/Banner';


const Mice = () => {
    return(
        <div classNam="page_wrapper">
                <Banner
                    img={require('../assets/img/conference-hall.jpg')}
                    title="Mice" />


            <div className="container mt-5 pt-5 mb-5 pb-5">

                <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                        <img className="img-fluid" src={require('../assets/img/meeting.jpg')} />
                    </div>
                    <div className="col-md-6">
                        <div>
                        <h5>MICE (Meetings, Incentive, Conference, Events)</h5>
                        <p>Conect Stays Pvt. Ltd has extensive experience in organizing Meeting, Incentive, conferences and Events. We can assist with every aspect of your MICE requirement anywhere in India and major Corporate sectors.</p>
                        </div>
                    </div>
                    
                </div>
               
            </div>


        </div>
    )
}

export default Mice;