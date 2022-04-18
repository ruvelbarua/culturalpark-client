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
import Simg0 from '../pic/slider/dyning.jpg';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg1}
                        alt="First slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>কালচারাল পার্ক ক্যাম্পাস</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg2}
                        alt="Second slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>আনন্দনিকেতন</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg3}
                        alt="Third slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>জাগরণ মঞ্চ</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg4}
                        alt="Four slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>শিশুদের বিনোদন কেন্দ্র</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg5}
                        alt="Five slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>সুনয়ন মিলনায়তন</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg6}
                        alt="Six slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1 className='bg-primary text-white'>শীলানন্দ পাঠাগার</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg7}
                        alt="Seven slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h4 className='bg-primary text-white'>শান্তি ভাস্কর্য</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg8}
                        alt="Eight slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>তোরণ</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg9}
                        alt="Eight slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>পুরুষ-প্রকৃতি ভাস্কর্য</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <Container>
                    <img
                        className="d-block w-100"
                        src={Simg0}
                        alt="Eight slide"
                    />
                </Container>
                <Carousel.Caption>
                    <h1>ডাইনিং হল</h1>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Slider;