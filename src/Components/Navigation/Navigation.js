import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import campuspic from '../pic/campus.JPG';
import Services from '../Services/Services';

const Navigation = () => {
    return (
        <Container>
            <Card>
                <Card.Img src={campuspic} alt="campus image" />
                <Card.ImgOverlay className='text-center'>
                    <Card.Title><h1 className='text-danger'>কালচারাল পার্ক</h1></Card.Title>
                    <Card.Text><p className='text-dark'>সত্য, সুন্দর ও মহত্ত্বের সাধনায়</p></Card.Text>
                    <Card.Text>
                        <p className='text-primary'>মেডিটেশন সেন্টার, অতিথি ভবন ও সংস্কৃতি চর্চা কেন্দ্র</p> </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container >
    );
};

export default Navigation;