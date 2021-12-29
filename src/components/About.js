import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './about.css';
import { ReactComponent as AboutPhoto } from '../img/girl-programmer.svg';

const About = () => {
    return (
        <>
            <section id='about'>
                <Container className='container-fluid'>
                    <Row>
                      <h2 className="text-center mt-3"><span className='bracket'>&#8249;</span>About<span className='bracket'> &#8260;&#8250;</span></h2>
                    </Row>
                    <Row>
                        <AboutPhoto className="mb-4" />
                    </Row>
                    <Row>
                        <p>
                            I'm a freelance Web Developer and Virtual Assistant who aims to provide holistic business solutions to companies.
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
                    </Row>
                </Container>

                
        
                   
            </section>
        </>
    );
};

export default About;