import React from 'react';
import { Container, Navbar, Button, ButtonGroup, DropdownButton, Dropdown, NavbarBrand } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../Hooks/useAuth';
import Logo1 from '../pic/logo.png';
import './Header.css';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="d-flex justify-content-around">
            <div className='text-center'>
                <Navbar.Brand href="#home">
                    <img
                        alt="cultural park logo"
                        src={Logo1}
                        width="100"
                        height="80"
                        className="d-inline-block align-top"
                    />{' '}
                    <h2>Cultural Park</h2>
                    <p>www.culturalparkbd.com</p>
                </Navbar.Brand>
            </div>
            <div className=''>
                <Navbar>
                    <Navbar.Collapse className="justify-content-end" >
                        <Navbar.Brand>
                            <Button as={HashLink} to="/home" variant="outline-primary">Home</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/about" variant="outline-warning">About Us</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/services" variant="outline-primary"> Services</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/meditation" variant="outline-primary"> Meditation</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/publication" variant="outline-primary"> Publication</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/photos" variant="outline-primary">Photos</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/donation" variant="outline-primary">Membership</Button>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Button as={HashLink} to="/contacts" variant="outline-primary">Contacts</Button>
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
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Navbar >
    );
};

export default Header;