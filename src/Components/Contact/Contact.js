import React from 'react';
import { Card } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header><h2 className=' font-weight-bold'>প্রতিষ্ঠানের সাথে যোগাযোগ</h2></Card.Header>
                <Card.Body>
                    <Card.Title>প্রতিদিন সকাল ৯টা থেকে বিকেল ৫টা (রবিবার বন্ধ)</Card.Title>
                    <Card.Text className='text-start my-4'>
                        <div className='row'>
                            <div className='col-sm-3 col-lg-2'>
                                <p>Webpage: www.culturalparkbd.com</p>
                                <p>Email: culturalpark@gmail.com</p>
                                <p>Facebook: culturalpark@gmail.com</p>
                                <p>YouTube: comming soon..</p>
                                <p>Instagram: comming soon..</p>
                                <p>Twiter: comming soon..</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Mobile: +88-01819640358 +88-01721108654</Card.Footer>
            </Card>
        </div>
    );
};

export default Contact;