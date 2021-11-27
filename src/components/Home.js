import React from 'react';
import {Button} from 'react-bootstrap';
import './home.css';
import background from '../../src/img/laptop-bg.jpg';

const Home = () => {
    return (
        <>
            <section id='home' 
            style={{
                backgroundImage:`url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                }}>
                <div className="banner" >
                    <h6 className="lightgray">HEY THERE!</h6>
                    <h1 className="indigo name">I AM LYNETTE</h1>
                    <h4 className="lightgray">FULL-STACK WEB DEVELOPER</h4>
                    <Button>Get in touch</Button>
                </div>
            </section>
        </>
    );
};

export default Home;