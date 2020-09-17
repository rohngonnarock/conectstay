import React from 'react';
import Banner from '../components/Banner';


const Hotels = () => {
    return(
        <div classNam="page_wrapper">
            <Banner
                img={require('../assets/img/hotel-11.jpg')}
                title="Hotels" />


            <div className="container mt-5 pt-5">
                <h2>5 Stars</h2>
                <div className="row">
                    {fiveStar.map(item => (
                    <div className="col-lg-4 col-md-6">
                        <div className="hotel_card">
                            <img src={item.img} />  
                            <h3>{item.text}</h3>
                        </div>
                    </div>))}
                </div>
            </div>



            <div className="container mt-5">
                <h2>4 Stars</h2>
                <div className="row">
                    {fourStar.map(item => (
                    <div className="col-lg-4 col-md-6">
                        <div className="hotel_card">
                            <img src={item.img} />  
                            <h3>{item.text}</h3>
                        </div>
                    </div>))}
                </div>
            </div>




            <div className="container mt-5">
                <h2>Budget Hotels</h2>
                <div className="row">
                    {budgetHotels.map(item => (
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

export default Hotels;


const fiveStar = [
    {img: require('../assets/img/five-star/taj-hotel.jpg'), text: 'Taj Group of Hotels'},
    {img: require('../assets/img/five-star/itc.jpg'), text: 'ITC Group of Hotels'},
    {img: require('../assets/img/five-star/leela-hotel.jpg'), text: 'leela Group of Hotels'},
    {img: require('../assets/img/five-star/ihg.jpg'), text: 'IHG Group of Hotels'},
    {img: require('../assets/img/five-star/accor.jpg'), text: 'Accor Group of Hotels'},
    {img: require('../assets/img/five-star/marriott.jpg'), text: 'Marriott Group of Hotels'}
]

const fourStar = [
    {img: require('../assets/img/four-star/lemon-tree-hotel.jpg'), text: 'Lemontree Group of Hotels'},
    {img: require('../assets/img/four-star/contreen.jpg'), text: 'countri Group of Hotels'},
    {img: require('../assets/img/four-star/park-inn.jpg'), text: 'Park Inn Group of Hotels'},
    {img: require('../assets/img/four-star/Sarovar-Hotel.jpg'), text: 'Sarovar Group of Hotels'},
    {img: require('../assets/img/four-star/Fern-Hotel.png'), text: 'The Fern Group of Hotels'},
    {img: require('../assets/img/four-star/ginger.jpg'), text: 'Ginger Group of Hotels'},
]


const budgetHotels = [
    {img: require('../assets/img/buget-hotels/fab-hotel.png'), text: 'Fab Hotel'},
    {img: require('../assets/img/buget-hotels/oyo-logo.png'), text: 'Oyo Rooms'},
    {img: require('../assets/img/buget-hotels/Treebo-hotels.jpg'), text: 'Treebo Hotels'},
    {img: require('../assets/img/buget-hotels/gust-house.jpg'), text: 'Gust Houses Chains'},
    {img: require('../assets/img/buget-hotels/individual-hotel.jpg'), text: 'Individual Hotels Chains'},
    {img: require('../assets/img/buget-hotels/standalone-hotels.jpg'), text: 'Standalone hotels'},
]