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
                    <h5>স্বাগতম</h5>
                    <h2>কালচারাল পার্ক ক্যাম্পাস</h2>
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
                    <h2>আনন্দনিকেতন</h2>
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
                    <h2>জাগরণ মঞ্চ</h2>
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
                    <h2>শিশুদের বিনোদন কেন্দ্র</h2>
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
                    <h2>সুনয়ন মিলনায়তন</h2>
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
                    <h2>শীলানন্দ পাঠাগার</h2>
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
                    <h2>শান্তীর ভাস্কর্য্য</h2>
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
                    <h2>তোরন</h2>
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
                    <h2>ভাস্কর্য্য</h2>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Slider;