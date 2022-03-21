import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FaGlobeAsia, FaFacebook, FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
    return (

        <Card className=" container text-center my-4">
            <Card.Header className='bg-dark'><h4 className=' font-weight-bold text-warning'>প্রতিষ্ঠানের সাথে যোগাযোগ প্রতিদিন সকাল ৯টা থেকে বিকেল ৫টা (রবিবার বন্ধ)</h4></Card.Header>
            <div>
                <h2>Enter Your Information</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                        <Form.Text className="text-muted">
                            Please enter your full name.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Please enter your valid email.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="Mobile Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicComments">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control type="text" placeholder="Comments" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className='text-start my-4'>
                    <div className='row'>
                        <div className='container d-flex col-sm-4 col-md-6 gap-4 text-center text-primary'>
                            <p>Webpage:<a href='https://tinyurl.com/yc997yv9' target='blank'><h1 className='text-success'><FaGlobeAsia /></h1></a> </p>
                            <p>Facebook:<a href='https://tinyurl.com/yc997yv9' target='blank'><h1 className='text-primary' ><FaFacebook /></h1></a></p>
                            <p>YouTube: <a href='https://www.youtube.com/channel/UCXLLJ8Y3JMDGdTRRHtVLDiw' target='blank'><h1 className='text-danger' ><FaYoutube /></h1></a></p>
                            <p>Instagram:<h1 className='text-warning'><FaInstagramSquare /></h1></p>
                            <p>Twiter: <h1 className='text-info'><FaTwitter /></h1></p>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Mobile: +88-01819640358 +88-01721108654</Card.Footer>
        </Card>
    );
};

export default Contact;