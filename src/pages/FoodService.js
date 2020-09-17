import React from 'react';
import Banner from '../components/Banner';


const FoodService = () => {
    return(
        <div classNam="page_wrapper">
                <Banner
                    img={require('../assets/img/corporate-catering.jpg')}
                    title="Corporate Catering" />


            <div className="container mt-5 pt-5 mb-5 pb-5">
                <h2 className="text-center mb-4">Corporate Catering</h2>

                <p><b>Are you looking for Corporate Catering in Delhi NCR ?</b> Conect Stays Pvt Ltd is an experienced and professional corporate caterers providing corporate catering services in Delhi, Gurugram and Noida. We are used to providing the best catering solutions for any corporate catering from breakfast, lunch and dinner.</p>
                <p>Our corporate catering service is famous for delivering the most diverse and creative food options using quality, nutritious and seasonal produce, at the same time working to your set budgets.</p>
                <p>We have an impressive portfolio of companies that have enjoyed their delicious meals. We provide our corporate clients with a wide array of menu, format, and scheduling options.</p>


                <p>
                <b>Why We?:</b><br />
                Breakfast, lunch and dinner options<br />
                Variety of food, salads, seasonality<br />
                Building relationship – we know your needs and wants to make your life easier<br />
                We work to create new healthy 'Nourish' menus so you don’t get bored

                </p>

                <p><b>Note:</b> We provide corporate catering service on monthly basis.</p>
            </div>


        </div>
    )
}

export default FoodService;