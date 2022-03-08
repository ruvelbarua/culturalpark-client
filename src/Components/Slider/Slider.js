import React from 'react';
import { Carousel } from 'react-bootstrap';
import Simg1 from '../pic/slider/campus.JPG';
import Simg2 from '../pic/slider/anandaniketon.JPG';
import Simg3 from '../pic/slider/jm.JPG';
import Simg4 from '../pic/slider/pg.jpg';
import Simg5 from '../pic/slider/sm.jpg';
import Simg6 from '../pic/slider/sp.jpg';
import Simg7 from '../pic/slider/sv.jpg';
import Simg8 from '../pic/slider/toron.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Welcome</h5>
                    <h2>Cultural Park Campus</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>Anandaniketon</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>Jagoron Moncho</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg4}
                    alt="Four slide"
                />
                <Carousel.Caption>
                    <h2>Play Ground</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg5}
                    alt="Five slide"
                />
                <Carousel.Caption>
                    <h2>Sunoyon Milonayoton</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg6}
                    alt="Six slide"
                />
                <Carousel.Caption>
                    <h2>Shilananda Pathagar</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg7}
                    alt="Seven slide"
                />
                <Carousel.Caption>
                    <h2>Shanti Vaskorzo</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Simg8}
                    alt="Eight slide"
                />
                <Carousel.Caption>
                    <h2>Toron</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;