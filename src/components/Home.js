import React from 'react';
import {Button} from 'react-bootstrap';
import './home.css';
import Background from '../img/girl-sitting-and-coding.png';

const Home = () => {
    return (
        <>
            <section id='home'
            style={{
                backgroundImage:`url(${Background})`
                }} 
            >
                <div className="banner">
                    <h6>Hey there!</h6>
                    <h3>I'm <span className='name'>Lynette</span></h3>
                    <h5>A Full-stack Web Developer</h5>
                    <h5>and a Seasoned Virtual Assistant</h5>
                    <p>3 things I love: family, problem-solving, good movie.</p>
                    <Button><a href="#about">Learn more &#8594;</a></Button>
                    
                </div>
            </section>
        </>
    );
};

export default Home;