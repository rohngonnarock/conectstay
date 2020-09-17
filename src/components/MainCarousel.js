import React from 'react';
import Slider from 'react-slick';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const MainCarousel = props => {
    return(
        <Slider {...settings}>
            {props.sliders.map(item => <div className="sider_img"><img src={item} /></div>)}
      </Slider>
    )
}

export default MainCarousel;