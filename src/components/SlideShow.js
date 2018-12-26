import React, { Component } from 'react';
const ServiceSlideShow = () => {

    return (
        <div className="Slideshow">
            <slider>
                <slide><p>Process Gap Analysis</p>
                    <a>Implementing a strategy to cover the gap </a></slide>
                <slide><p>Enterprise Software Development</p></slide>
                <slide><p>IT Consulting</p></slide>
                <slide><p>It Support/Maintenance</p></slide>
            </slider>
        </div>
    )

};

export default ServiceSlideShow;