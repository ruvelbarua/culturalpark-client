import React from 'react';
// import { Card, Col, Container, NavLink, Row } from 'react-bootstrap';
import { FcCustomerSupport, FcDepartment, FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import Fimg from '../pic/logo1.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="container-flex my-5 p-3">
            <div className="row bg-dark">
                <div className="col-md-4">
                    <div className="text-light my-5">
                        <h4>Contact:</h4>
                        <div className="my-2 ">
                            <h5><FcDepartment />: www.culturalparkbd.com</h5>
                            <h5><FcGoogle />: culturalparkbd@gmail.com</h5>
                            <h5> <FcCustomerSupport />:+88-018-19640358</h5>
                            <div className="gap-2 d-flex">
                                <h5><ImFacebook2 />: Facebook
                                </h5>
                                <h5><FaInstagramSquare />:  Instagram</h5>
                                <h5><FaTwitterSquare />:Twiter
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5 text-light">
                    <h5>Our Location Map:</h5>
                    <p>Comming Soon...</p>
                    {/* <img className="master-card" src={Cimg} alt="" /> */}
                </div>
                <div className="col-md-4">
                    <div className="my-5">
                        <div>
                            <img className="fimg-size" src={Fimg} alt="" />
                        </div>
                        <div className="text-light text-left my-2">
                            <p>Cultural Park Logo</p>
                        </div>
                    </div>
                </div>
                <div className="text-light text-center">Copyright: 2022 culturalparkbd.com ||  Design By: Ruvel Barua. || Email: ruvel.br78@gmail.com</div>
            </div>

        </div>
    );
};

export default Footer;