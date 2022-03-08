import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Simg1 from '../pic/slider/campus.JPG';
import Simg2 from '../pic/slider/anandaniketon.JPG';
import Simg3 from '../pic/slider/jm.JPG';
import Simg4 from '../pic/slider/pg.jpg';
import Simg5 from '../pic/slider/sm.jpg';
import Simg6 from '../pic/slider/sp.jpg';
import Simg7 from '../pic/slider/sv.jpg';
import Simg8 from '../pic/slider/toron.jpg';
import Simg9 from '../pic/slider/ppv.JPG';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg1}
                        alt="First slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h5>Welcome</h5>
                    <h2>Cultural Park Campus</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg2}
                        alt="Second slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Anandaniketon</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg3}
                        alt="Third slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Jagoron Moncho</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg4}
                        alt="Four slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Play Ground</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg5}
                        alt="Five slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Sunoyon Milonayoton</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg6}
                        alt="Six slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Shilananda Pathagar</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg7}
                        alt="Seven slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Shanti Vaskorzo</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg8}
                        alt="Eight slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Toron</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg9}
                        alt="Eight slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h2>Vaskorzo</h2>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Slider;