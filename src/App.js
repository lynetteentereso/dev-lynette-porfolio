import React from 'react';
import {Navbar, Container, Nav, } from 'react-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import {ReactComponent as Logo} from './img/logo.svg'

const App = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <Logo
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#skills">skills</Nav.Link>
              <Nav.Link href="#works">works</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home/>
    </div>
  );
};

export default App;