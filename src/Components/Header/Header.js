import React from 'react';
import { Container, Navbar, Button, ButtonGroup, DropdownButton, Dropdown, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../Hooks/useAuth';
import Logo1 from '../pic/logo1.png';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant={"dark"} >
            <Container>
                <div className='d-flex text-center p-2'>
                    <Navbar.Brand href="/home">
                        <div className='d-flex'>
                            <div>
                                <img src={Logo1} alt="" className="d-inline-block align-text-center rounded rounded-circle" width="80" />
                            </div>
                            <div>
                                <h3 className='text-danger text-uppercase'>cultural park</h3>
                                <p className='text-white fst-italic'>www.culturalparkbd.com</p>
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle className='container' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Navbar.Brand>
                                <Button as={HashLink} to="/home" variant="outline-warning btn-sm">Home</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/about" variant="outline-warning btn-sm">About Us</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/services" variant="outline-warning btn-sm"> Services</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/meditation" variant="outline-warning btn-sm"> Meditation</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/publication" variant="outline-warning btn-sm"> Publication</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/photos" variant="outline-warning btn-sm">Photo Gallery</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/membership" variant="outline-warning btn-sm">Membership</Button>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Button as={HashLink} to="/contact" variant="outline-warning btn-sm">Contacts</Button>
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                {/* <div className="container-fluid text-center">
                    <div>
                        <a className="navbar-brand" href="#home">
                            <img src={Logo1} alt="" className="d-inline-block align-text-center rounded rounded-circle" width="100" />
                        </a>
                    </div>
                    <div className='fw-bold text-danger'>
                        <h4 >CULTURAL PARK</h4>
                        <p className='badge bg-success'>www.culturalparkbd.com</p>
                    </div>
                </div>

                <Navbar className='collapse navbar-collapse'>
                    <div >
                        <div className='container-fluid justify-content-end'>
                            <Navbar.Collapse className="" >
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/home" variant="outline-primary btn-sm">Home</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/about" variant="outline-primary btn-sm">About Us</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/services" variant="outline-primary btn-sm"> Services</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/meditation" variant="outline-primary btn-sm"> Meditation</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/publication" variant="outline-primary btn-sm"> Publication</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/photos" variant="outline-primary btn-sm">Photos</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/membership" variant="outline-primary btn-sm">Membership</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/contacts" variant="outline-primary btn-sm">Contacts</Button>
                                </Navbar.Brand>
                                {/* <Navbar.Brand>
                            <ButtonGroup>
                                {
                                    user?.email ?
                                        <Button onClick={logOut} variant="light"> Log Out</Button>
                                        :
                                        <DropdownButton as={ButtonGroup} title="User" id="dropdown">
                                            <Dropdown.Item as={HashLink} to="/login" eventKey="1">Login</Dropdown.Item>
                                            <Dropdown.Item as={HashLink} to="/register" eventKey="2">Register</Dropdown.Item>
                                        </DropdownButton>
                                }
                                <h6 className="text-pirmary">Signin:{user?.email}</h6>
                            </ButtonGroup>
                        </Navbar.Brand> */}
            </Container >
        </Navbar >
    );
};

export default Header;