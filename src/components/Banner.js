import React from 'react';


const Banner = props => (
    <div className="cm_banner" style={{backgroundImage: `url(${props.img})`}}>
        <div className="container">
            <h2>{props.title}</h2>
            {props.text ? <p>{props.text}</p> : ''}
        </div>
    </div>
)

export default Banner;