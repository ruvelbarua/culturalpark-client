import React from 'react';
import { Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>CONTUCT US</Card.Header>
                <Card.Body>
                    <Card.Title>www.culturalparkbd.com</Card.Title>
                    <Card.Text className='text-start'>
                        <h4>Email: culturalpark@gmail.com</h4>
                        <h4>Facebook: culturalpark@gmail.com</h4>
                        <h4>YouTube: culturalparkbd</h4>
                        <h4>Twiter: ...</h4>
                        <h4>Instagram: ...</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Mobile: +88-018640358</Card.Footer>
            </Card>
        </div>
    );
};

export default Contact;