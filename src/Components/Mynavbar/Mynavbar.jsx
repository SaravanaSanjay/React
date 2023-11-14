import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Mynavbar.css'
import { BsBrightnessHigh } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { useState } from 'react';
function NavScrollExample() {
  return (
    <>
    <Container className='px-0'>
      <header>
        <Navbar expand="lg">
        <Navbar.Brand className={'px-3 py-3 logo'}href="#">SS /</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
            <Nav.Link href="#about" className='px-3 py-3 content'>About</Nav.Link>
            <Nav.Link href="#work" className='px-3 py-3 content'>Work</Nav.Link>
            <Nav.Link href="#test" className='px-3 py-3 content'>Testimonials</Nav.Link>
            <Nav.Link href="#contact" className='px-3 py-3 content'>Contact</Nav.Link>
            <Nav.Link className='p-2'><BsMoonStars style={{color:'black'}} /></Nav.Link>
            <a href='https://drive.google.com/file/d/1hcHGywW86sB4sP1E_P1zZdUmgavsqXG0/view?usp=sharing'Download = "CV"><Button type='button' variant="dark" className='p-2'>Download CV</Button></a>
        </Navbar.Collapse>
        </Navbar>
        </header>
    </Container>
    </>
  );
}

export default NavScrollExample;