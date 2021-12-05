import React from 'react';
import ProgressBar from './ProgressBar';
import './about.css';
import { ReactComponent as AboutPhoto } from '../img/girl-programmer.svg';

const About = () => {
    return (
        <>
            <section id='about'>
                <h2 className="text-center"><span className='bracket'>&#8249;</span>About<span className='bracket'> &#8260;&#8250;</span></h2>

                <div className="container-fluid text-start d-flex flex-row justify-content-center align-items-center align-content-center flex-wrap justify-content-xxl-center align-items-xxl-center">
                    <div className='row'>
                        <div className='col-md-6 mt-4'>
                            <div className='col-container'>
                            <p>
                            I'm an all-rounder Virtual Assistant who aims to provide holistic business solutions to companies.
                            </p>
                            <p>
                                I have been working with several clients (US and Australia) from various niches such as Real Estate, E-Commerice, Law Firm, etc., for more than five years now. 
                            </p>
                            <p>
                                As I continue my journey in giving support and adding value to my clients' businesses, I have taken on a new challenge that I can champion -- Full Stack Web Development.  I am currently enrolled in <a href='https://www.upliftcodecamp.com/' target='_blank' style={{color: 'rgb(247, 103, 115)'}}>Uplift Code Camp's</a> 6-month intensive coding bootcamp and will be earning my certficate by the end of the year.
                            </p>
                            <p>
                                I'm excited to share what I have learned and to see how I can help your business grow. Let's talk!
                            </p> 
                            <AboutPhoto alt='Girl Programmer' className='img-fluid about-photo'/> 
                            </div> 
                        </div>

                        <div className='col-md-6 mt-4 skills mt-4 mb-3'>
                            <div className='col-container'> 
                            <h4>Skills</h4>
                            <p>HTML <span><ProgressBar bgcolor='#ffe0d4' progress='90' height={25} /></span></p>
                            <p>CSS <span><ProgressBar bgcolor='#ffe0d4' progress='90' height={25} /></span></p>
                            <p>Bootstrap<span><ProgressBar bgcolor='#ffe0d4' progress='90' height={25} /></span></p>
                            <p>JavaScript <span><ProgressBar bgcolor='#ffe0d4' progress='90' height={25} /></span></p>
                            <p>Photoshop <span><ProgressBar bgcolor='#ffe0d4' progress='85' height={25} /></span></p>
                            <p>Premiere Pro <span><ProgressBar bgcolor='#ffe0d4' progress='85' height={25} /></span></p>
                            <p>ReactJS <span><ProgressBar bgcolor='#ffe0d4' progress='75' height={25} /></span></p>
                            <p>ExpressJS <span><ProgressBar bgcolor='#ffe0d4' progress='75' height={25} /></span></p>
                            <p>MongoDB <span><ProgressBar bgcolor='#ffe0d4' progress='60' height={25} /></span></p>
                            <p>Database Design <span><ProgressBar bgcolor='#ffe0d4' progress='60' height={25} /></span></p>   
                            </div>
                        </div>

                    </div>
                </div>
    
                   
            </section>
        </>
    );
};

export default About;