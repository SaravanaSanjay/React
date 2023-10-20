
import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import cv_pic from '../../Img/cv_pic.jpg';
import Background from '../../Img/Background.png';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { BsFillRecordFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function Header(props) {
  const darkModeClass = props.ModeOn ? 'dark-mode' : 'light-mode';
  const textClass = props.ModeOn ? 'dark-text' : 'light-text';

  return (
    <Container id='layout' className={darkModeClass}>
    <div className='row' bg={darkModeClass ? "dark-mode" : "light-mode"} data-bs-theme={darkModeClass ? "dark-mode" : "light-mode"} expand='lg'>
        <div className="col">
          <div className={`Hcontent0 ${textClass}`}>Hi, I’m Saravana Sanjay 👋</div>
          <div className={`${darkModeClass ? 'textClass ptext':'ptext'}`}>
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications, I still love it as if it was something new.
          </div>
          <div className="row" id="headtext1">
            <div className="ptext">
              <BsFillGeoAltFill /> Chennai, India
            </div>
            <div>
              <BsFillRecordFill style={{ color: 'green' }} /><span className='ptext'> Available for new projects</span>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <BsGithub /> <BsLinkedin /> <BsInstagram />
            </div>
          </div>
        </div>
        <div className="col">
          <img className="position-absolute cv" src={cv_pic} alt="CV" />
          <img className="bg" src={Background} alt="Background" />
        </div>
      </div>
    </Container>
  );
}

export default Header;
