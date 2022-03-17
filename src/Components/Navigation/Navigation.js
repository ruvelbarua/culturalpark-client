import React from 'react';
import { Card, Container } from 'react-bootstrap';
import campuspic from '../pic/campus.JPG';

const Navigation = () => {
    return (
        <Container>
            <Card>
                <Card.Img src={campuspic} alt="campus image" />
                <Card.ImgOverlay className='text-center'>
                    <Card.Title><h2 className='text-danger'>কালচারাল পার্ক</h2></Card.Title>
                    <Card.Text>
                        <h4 className='text-dark'>মেডিটেশন সেন্টার, অতিথি ভবন ও সংস্কৃতি চর্চা কেন্দ্র</h4> </Card.Text>
                    <Card.Text><h5 className='text-success'>সত্য, সুন্দর ও শান্তি প্রতিষ্ঠার প্রত্যয়ে আমাদের পথচলা...</h5></Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default Navigation;