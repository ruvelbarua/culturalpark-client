import React from 'react';
import About from '../About/About';
import Activities from '../Activities/Activities';
import MarqueeDoc from '../MarqueeDoc/MarqueeDoc';
import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <MarqueeDoc></MarqueeDoc>
            <Navigation></Navigation>
            <About></About>
            <Services></Services>
            <Slider></Slider>
            <Activities></Activities>
            <Registration></Registration>
        </div>
    );
};

export default Home;