import React from 'react';
import MainCarousel from '../components/MainCarousel';


const Home = () => {
    return(
        <div classNam="page_wrapper">
            <div className="main_banner">
                <MainCarousel sliders={sliders} />

                <div className="main_banner_text">
                    <h2>Welcome to CoNectstay.<span>com</span></h2>
                </div>
            </div>



            <div className="container mt-5 pt-5 mb-5 pb-5">
                <h2 className="text-center mb-5 bg_title">Sense the warmth of Travel management in Pan-India</h2>
                <div className="row">


                    <div className="col-md-4">
                        <div className="cm_card home_card">
                            <div className="card_img">
                                <img src={require('../assets/img/hotel-10.jpg')} />
                            </div>
                            <div className="card_body">
                                <h2>Economical hotels</h2>
                                <ul>
                                    <li> Top Budget hotels</li>
                                    <li> Prime location</li>
                                    <li> Free hi speed Wi-Fi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cm_card home_card">
                            <div className="card_img">
                                <img src={require('../assets/img/hotel-9.jpg')} />
                            </div>
                            <div className="card_body">
                                <h2>Standard Hotels </h2>
                                <ul>
                                    <li> Comfortable Rooms</li>
                                    <li> Branded toileetries </li>
                                    <li> Tea and coffe maker in rooms </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cm_card home_card">
                            <div className="card_img">
                                <img src={require('../assets/img/hotel-8.jpg')} />
                            </div>
                            <div className="card_body">
                                <h2>Premium Hotels </h2>
                                <ul>
                                    <li> Spacious rooms </li>
                                    <li> Room dining</li>
                                    <li> Well trend staff</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>




            <div className="container">
                <div className="row">
                <div className="col-md-1" />
                    <div className="col-md-5">
                        <div className="cm_counts">
                            <svg viewBox="0 0 64 64"><g><g><g><path d="m14 2h8v4h-8z" fill="#ffc729"/></g><g><path d="m24 6v6h-12v-6h2 8z" fill="#fcd770"/></g><g><path d="m28 12v8h-3-14-3v-8h4 12z" fill="#ffeaa7"/></g><g><path d="m8 30.35v-10.35h3 14 3v6h-4v4 1.54c-1.06-.96-2.46-1.54-4-1.54h-10c-.7 0-1.37.12-2 .35z" fill="#ffeaa7"/></g><g><path d="m52 6v10h-12v-8l2-.33 4-.67 4-.67z" fill="#ccd1d9"/></g><g><path d="m54 16v21.14l-6 .86v7.33l-4-5.33-4 5.33v-15.33-4h-2v-10h2 12z" fill="#e6e9ed"/></g><g><path d="m40 26v4h-16v-4h4 10z" fill="#ecc19c"/></g><g><path d="m24 30h16v15.33l-2 2.67v14h-10v-22-4h-2c0-1.77-.77-3.37-2-4.46z" fill="#f0d0b4"/></g><g><path d="m62 62h-12v-14l-2-2.67v-7.33l6-.86 8-1.14z" fill="#ecc19c"/></g><g><path d="m48 45.33 2 2.67h-12l2-2.67 4-5.33z" fill="#fcd770"/></g><g><path d="m38 48h12v14h-12z" fill="#ffeaa7"/></g><g><path d="m26 36h-22c0-2.61 1.67-4.84 4-5.65.63-.23 1.3-.35 2-.35h10c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46z" fill="#aab2bd"/></g><g><path d="m28 36v4h-26v-4h2 22z" fill="#ccd1d9"/></g><g><path d="m2 40h26v22h-26z" fill="#e6e9ed"/></g><g><path d="m6 44h18v18h-18z" fill="#69d6f4"/></g></g><g><path d="m41 51h2v8h-2z"/><path d="m45 51h2v8h-2z"/><path d="m55 35.99v-20.99h-2v-10.181l-2 .333v-2.152h-2v2.486l-2 .333v-4.819h-2v5.153l-2 .333v-3.486h-2v3.819l-2 .333v7.848h-2v10h-8v-14h-4v-6h-2v-4h-10v4h-2v6h-4v18.685c-2.072.989-3.581 2.962-3.92 5.315h-2.08v28h62v-28.153zm-14-27.143 10-1.667v7.82h-10zm-2 8.153h14v19.276l-6 .857v5.201l-3-4-3 4v-17.334h-2zm0 12h-14v-2h14zm0 20h10v12h-10zm1-2 4-5.333 4 5.333zm-25-44h6v2h-6zm-2 4h10v4h-10zm-4 6h18v12h-4v4.685c-.911-.434-1.926-.685-3-.685h-10c-.34 0-.672.033-1 .08zm1 18h10c2.414 0 4.434 1.721 4.899 4h-19.798c.465-2.279 2.485-4 4.899-4zm17 6v2h-24v-2zm-4 18h-4v-4h4zm-6 0h-4v-4h4zm0 2v4h-4v-4zm2 0h4v4h-4zm4-8h-4v-4h4zm-6 0h-4v-4h4zm-6 0h-4v-4h4zm-4 2h4v4h-4zm0 6h4v4h-4zm18 4v-18h-20v18h-2v-20h24v20zm1.92-26c-.216-1.502-.906-2.853-1.92-3.889v-.111h14v14l-2 2.667v13.333h-8v-26zm34.08 26h-10v-13.333l-2-2.667v-6.133l12-1.714z"/><path d="m31 45h2v2h-2z"/><path d="m31 53h2v2h-2z"/><path d="m31 57h2v2h-2z"/><path d="m31 41h2v2h-2z"/><path d="m31 49h2v2h-2z"/><path d="m31 33h2v2h-2z"/><path d="m31 37h2v2h-2z"/><path d="m35 41h2v2h-2z"/><path d="m35 37h2v2h-2z"/><path d="m35 33h2v2h-2z"/><path d="m57 57h2v2h-2z"/><path d="m57 49h2v2h-2z"/><path d="m57 45h2v2h-2z"/><path d="m57 41h2v2h-2z"/><path d="m57 53h2v2h-2z"/><path d="m53 57h2v2h-2z"/><path d="m53 53h2v2h-2z"/><path d="m53 41h2v2h-2z"/><path d="m53 49h2v2h-2z"/><path d="m53 45h2v2h-2z"/><path d="m19 15h2v2h-2z"/><path d="m11 15h2v2h-2z"/><path d="m15 15h2v2h-2z"/><path d="m23 15h2v2h-2z"/><path d="m11 19h2v2h-2z"/><path d="m15 19h2v2h-2z"/><path d="m23 19h2v2h-2z"/><path d="m19 19h2v2h-2z"/><path d="m11 23h2v2h-2z"/><path d="m19 23h2v2h-2z"/><path d="m15 23h2v2h-2z"/><path d="m45 19h2v2h-2z"/><path d="m49 19h2v2h-2z"/><path d="m41 19h2v2h-2z"/><path d="m41 23h2v2h-2z"/><path d="m49 23h2v2h-2z"/><path d="m45 23h2v2h-2z"/><path d="m45 31h2v2h-2z"/><path d="m45 27h2v2h-2z"/><path d="m45 35h2v2h-2z"/><path d="m49 27h2v2h-2z"/><path d="m49 31h2v2h-2z"/></g></g></svg>
                        
                            <h3>70+</h3>
                            <h5>CITIES</h5>
                        
                        </div>
                    </div>
                    
                    <div className="col-md-5">
                        <div className="cm_counts">
                            <svg viewBox="0 0 512 512"><g id="XMLID_2340_"><path id="XMLID_1551_" d="m10 454h492v48h-492z" fill="#cfd3df"/><path id="XMLID_1550_" d="m40 56h432v398h-432z" fill="#f2cd69"/><path id="XMLID_1549_" d="m256 312c-39.765 0-72 32.236-72 72v70h144v-70c0-39.764-32.236-72-72-72z" fill="#c7ebfa"/><path id="XMLID_1548_" d="m123.667 10h264.667v46h-264.667z" fill="#f6da8f"/><g fill="#cbf4fb"><path id="XMLID_1994_" d="m88 120h48v48h-48z"/><path id="XMLID_1993_" d="m184 120h48v48h-48z"/><path id="XMLID_1992_" d="m280 120h48v48h-48z"/><path id="XMLID_1991_" d="m376 120h48v48h-48z"/><path id="XMLID_1990_" d="m88 216h48v48h-48z"/><path id="XMLID_1989_" d="m184 216h48v48h-48z"/><path id="XMLID_1988_" d="m280 216h48v48h-48z"/><path id="XMLID_1987_" d="m376 216h48v48h-48z"/><path id="XMLID_1986_" d="m88 312h48v48h-48z"/><path id="XMLID_1985_" d="m376 312h48v48h-48z"/></g><g id="XMLID_630_"><g id="XMLID_631_"><path id="XMLID_806_" d="m502 444h-20v-388c0-5.523-4.478-10-10-10h-73.667v-36c0-5.523-4.478-10-10-10h-264.666c-5.522 0-10 4.477-10 10v36h-73.667c-5.522 0-10 4.477-10 10v388h-20c-5.523 0-10 4.477-10 10v48c0 5.523 4.477 10 10 10h201.004c5.522 0 10-4.477 10-10s-4.478-10-10-10h-191.004v-28h472v28h-191.002c-5.522 0-10 4.477-10 10s4.478 10 10 10h201.002c5.522 0 10-4.477 10-10v-48c0-5.523-4.478-10-10-10zm-368.333-424h244.666v26h-244.666zm112.333 424h-52v-60c0-30.782 22.553-56.385 52-61.182zm20 0v-121.182c29.447 4.797 52 30.4 52 61.182v60zm72 0v-60c0-45.215-36.785-82-82-82s-82 36.785-82 82v60h-124v-378h412v378z"/><path id="XMLID_825_" d="m136 110h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.523 0 10-4.477 10-10v-48c0-5.523-4.477-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_828_" d="m232 110h-48c-5.523 0-10 4.477-10 10v48c0 5.523 4.477 10 10 10h48c5.523 0 10-4.477 10-10v-48c0-5.523-4.477-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_831_" d="m328 110h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.522 0 10-4.477 10-10v-48c0-5.523-4.478-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_834_" d="m424 110h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.522 0 10-4.477 10-10v-48c0-5.523-4.478-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_1471_" d="m136 206h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.523 0 10-4.477 10-10v-48c0-5.523-4.477-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_1482_" d="m232 206h-48c-5.523 0-10 4.477-10 10v48c0 5.523 4.477 10 10 10h48c5.523 0 10-4.477 10-10v-48c0-5.523-4.477-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_1487_" d="m328 206h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.522 0 10-4.477 10-10v-48c0-5.523-4.478-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_1490_" d="m424 206h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.522 0 10-4.477 10-10v-48c0-5.523-4.478-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_632_" d="m136 302h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.523 0 10-4.477 10-10v-48c0-5.523-4.477-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_1513_" d="m424 302h-48c-5.522 0-10 4.477-10 10v48c0 5.523 4.478 10 10 10h48c5.522 0 10-4.477 10-10v-48c0-5.523-4.478-10-10-10zm-10 48h-28v-28h28z"/><path id="XMLID_1522_" d="m256 492c-2.63 0-5.21 1.07-7.07 2.93s-2.93 4.44-2.93 7.07 1.069 5.21 2.93 7.07c1.86 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07c-1.859-1.86-4.439-2.93-7.069-2.93z"/></g></g></g></svg>
                            
                            <h3>1000+</h3>
                            <h5>HOTELS</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-1" />
                    <div className="col-md-5">
                        <div className="cm_counts">
                            <img src={require('../assets/img/airplane.png')} className="img-width"/>
                            <h3>20+</h3>
                            <h5>AIRLINES</h5>
                        
                        </div>
                    </div>
                    
                    <div className="col-md-5">
                        <div className="cm_counts">
                        <img src={require('../assets/img/cab.png')} className="img-width"/>
                            <h3>100+</h3>
                            <h5>CAB VENDORS</h5>
                        </div>
                    </div>
                </div>
            </div>









            <div className="container mb-5 pb-5">

                <div classNam="row">
                    <div className="col">
                    <p>Conect Stays Pvt Ltd provides the Corporate Travel management solutions in which we manage a company’s strategic approach to travel ,cost benefits for client company, maximum satisfaction to travellers while fulfilling their requirement with prompt revert and providing them preferred solutions at within corporate travel policies, Round the clock support. Additionally we assist in obtaining maximum benefits from using Hotels and vendors. We ensure excellent management for day to day operation of the corporate travel program, traveller’s convenience, prompt information on various updates/changes information. </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;

const sliders = [
    require('../assets/img/hotel-5.jpg'),
    require('../assets/img/hotel-1.jpg'),
    require('../assets/img/hotel-2.jpg'),
    require('../assets/img/hotel-3.jpg'),
    // require('../assets/img/hotel-4.jpg'),
    require('../assets/img/hotel-6.jpg'),
    require('../assets/img/hotel-7.jpg'),
]