import React from 'react';
import {Card, Button, Container} from 'react-bootstrap';
import './works.css';
import StaticWebsite from '../img/static-website.png';
import EmojiMemoryGame from '../img/emoji-memory-game.png'; 
import Todo from '../img/todo-app.png'
import ComingSoon from '../img/coming-soon.png'

const Works = () => {
    return (
        <>
            <section id='works'>
               
            <h2 className="text-center"><span className='bracket'>&#8249;</span>Works<span className='bracket'> &#8260;&#8250;</span></h2>

                <Container className='cards container-fluid d-flex flex-row flex-wrap'>
                <Card style={{ width: '30rem' }} className='mt-4 mb-4 card'>
                    <Card.Img variant="top" src={ComingSoon} alt='Coming Soon'/>
                    <Card.Body>
                        <Card.Title>Hotel Booking System</Card.Title>
                        <Card.Text>
                        ReactJS, ExpressJS, MongoDB
                        </Card.Text>
                        <Button variant="primary">Live View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30rem' }} className='mt-4 mb-4 card'>
                    <Card.Img variant="top" src={ComingSoon} alt='Coming Soon' />
                    <Card.Body>
                        <Card.Title>Resto App</Card.Title>
                        <Card.Text>
                        ReactJS
                        </Card.Text>
                        <Button variant="primary">Live View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30rem' }} className='mt-4 mb-4 card'>
                    <Card.Img variant="top" src={Todo} alt="To Do App"/>
                    <Card.Body>
                        <Card.Title>To Do App</Card.Title>
                        <Card.Text>
                        ReactJS
                        </Card.Text>
                        <Button variant="primary">Live View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30rem' }} className='mt-4 mb-4 card'>
                    <Card.Img variant="top" src={ComingSoon} alt='Coming Soon' />
                    <Card.Body>
                        <Card.Title>Pokedex</Card.Title>
                        <Card.Text>
                        ReactJS
                        </Card.Text>
                        <Button variant="primary">Live View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30rem' }} className='mt-4 mb-4 card'>
                    <Card.Img variant="top" src={EmojiMemoryGame} alt='Emoji Memory Game' />
                    <Card.Body>
                        <Card.Title>Emoji Memory Game</Card.Title>
                        <Card.Text>
                        HTML, CSS, JavaScript
                        </Card.Text>
                        <Button variant="primary">Live View</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '30rem' }} className='mt-4 mb-4 card'>
                    <Card.Img variant="top" src={StaticWebsite} alt='Realtor Static Website'/>
                    <Card.Body>
                        <Card.Title>Realtor Static Website</Card.Title>
                        <Card.Text>
                        HTML, CSS
                        </Card.Text>
                        <Button variant="primary"><a href="https://lynette-static-website.herokuapp.com/" target="_blank">Live View</a></Button>
                    </Card.Body>
                </Card>
                </Container>
            </section>
        </>
    );
};

export default Works;