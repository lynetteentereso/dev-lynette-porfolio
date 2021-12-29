import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='text-center footer-clean mt-5 mb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-4 col-md-4 '>
                            <h6>Quick Links</h6>
                            <ul className='list-unstyled'>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#works">Works</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className='col-sm-4 col-md-4 '>
                            <h6>Profiles</h6>
                            <ul className='list-unstyled'>
                                <li><a href="https://www.linkedin.com/in/lynetteentereso/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://www.upwork.com/freelancers/~0194c163d4f0f7677b" target="_blank">Upwork</a></li>
                                <li><a href="https://github.com/lynetteentereso/" target="_blank">GitHub</a></li>
                                <li><a href="https://drive.google.com/file/d/1w1IW0Aaj_gxWhb95wb2wrmREoQv2NDKF/view?usp=sharing" target="_blank">My Resume</a></li>
                            </ul>
                        </div>

                        <div className='col-sm-4 col-md-4 '>
                            <h6>Services</h6>
                            <ul className='list-unstyled'>
                                <li>Web Development</li>
                                <li>Virtual Assistance</li>
                                <li>Photo Editing</li>
                                <li>Video Editing</li>
                            </ul>
                        </div>

                    </div>
                    <p className='copyright mt-4'>Lynette Entereso &copy; 2021.</p>
                    <p className='text-center'>Images from Freepik</p>
                </div>
            </footer> 
            
        </>  
    );
};

export default Footer;