import React from 'react';
import { Button, Card, Form, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import adpic from '../pic/admission.jpg'

const Registration = () => {
    return (
        <div className="container-flex my-3 m-5">
            <div className="">
                <div className="my-3 text-center text-danger">
                    <h2>Registration Form</h2>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-8 my-2">
                            <div className="my-2">
                                <Card>
                                    <Card.Img variant="top" src={adpic} />
                                    <Card.Body>
                                        <Card.Text className='text-center'>
                                            <h2>Admission Information</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-md-4 p-5 container border  bg-light my-3 form-design">
                            <div className="">
                                <Form onSubmit="">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="name" onBlur="" placeholder="Enter Name" required />
                                        <Form.Text className="text-muted">
                                            Please Enter Your Full Name
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" onBlur="" placeholder="Enter email" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"
                                            onBlur=""
                                            placeholder="Password" required />
                                        <Button className="my-3" variant="warning" type="submit"> Submit</Button>
                                    </Form.Group>
                                    <NavLink> Alredy Registred:<Link to="/login">Please Login</Link>
                                    </NavLink>
                                </Form>
                                <Button onClick="" variant="primary" type="submit">
                                    GLogin
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;