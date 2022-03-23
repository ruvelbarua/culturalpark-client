import React from 'react';
import { Container, Navbar, Button, ButtonGroup, DropdownButton, Dropdown, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../Hooks/useAuth';
import Logo1 from '../pic/logo1.png';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant={"dark"} p={"2"} >
            <Container>
                <div className='container text-center'>
                    <Navbar.Brand href="/home">
                        <img src={Logo1} alt="" className="d-inline-block align-text-center rounded rounded-circle" width="60" />
                        <h2 className='text-danger'>CULTURAL PARK</h2>
                        <p className='text-white'>www.culturalparkbd.com</p>
                    </Navbar.Brand>

                    <div className='container text-center'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
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
                                    <Button as={HashLink} to="/photos" variant="outline-primary btn-sm">Photo Gallery</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/membership" variant="outline-primary btn-sm">Membership</Button>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Button as={HashLink} to="/contact" variant="outline-primary btn-sm">Contacts</Button>
                                </Navbar.Brand>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
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