import React from 'react';
import About from '../About/About';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Slider></Slider>
            <Registration></Registration>
        </div>
    );
};

export default Home;