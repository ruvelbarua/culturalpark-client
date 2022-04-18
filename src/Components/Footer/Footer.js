import React from 'react';
import { FaGlobeAsia, FaFacebook, FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FcGoogle, FcAssistant } from "react-icons/fc";
import Fimg from '../pic/logo1.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="my-5 p-3 bg-dark">
            <div className="row">
                <div className='container d-flex col-md-4 my-5 text-center text-primary gap-4'>
                    <p>Webpage:<a href='https://tinyurl.com/yc997yv9' target='blank'><h1 className='text-success'><FaGlobeAsia /></h1></a> </p>
                    <p>Facebook:<a href='https://www.facebook.com/culturalpark.bangladesh/' target='blank'><h1 className='text-primary' ><FaFacebook /></h1></a></p>
                    <p>YouTube: <a href='https://www.youtube.com/channel/UCXLLJ8Y3JMDGdTRRHtVLDiw' target='blank'><h1 className='text-danger' ><FaYoutube /></h1></a></p>
                    <p>Instagram:<h1 className='text-warning'><FaInstagramSquare /></h1></p>
                    <p>Twiter: <h1 className='text-info'><FaTwitter /></h1></p>
                </div>
                <div className="col-md-4 my-5 text-center text-light fs-5">
                    <a href='/home'>Home</a> ||
                    <a href='/services'>Services</a> ||
                    <a href='/about'>About</a> ||
                    <a href='/contact'>Contact</a>
                    <p><span className='text-danger'><FcGoogle />: </span>culturalpark22@gmail.com</p>
                    <p><span className='text-warning'><FcAssistant />: </span> +88-01819640358</p>
                </div>
                <div className="col-md-4">
                    <div className="my-5 text-center">
                        <div className=''>
                            <img className="fimg-size" src={Fimg} alt="" />
                        </div>
                        <div className="text-light my-2">
                            <p>Thank you visit our page.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-light text-center mb-4">Copyright: 2022 culturalparkbd.com ||  Design By: Ruvel Barua. || Email: ruvel.br78@gmail.com</div>
        </div>
    );
};

export default Footer;