import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='main-display'>

      <Navbar bg="light" expand="lg" className='navbar-sticky-top'>
        <Container>
          <Navbar.Brand href="#home" className='portfolio'>
          Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mynav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home/>
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;