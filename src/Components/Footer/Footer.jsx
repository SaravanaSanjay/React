import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import { BsEnvelopeAt } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsCCircle } from "react-icons/bs";
import { useState } from 'react';
function Footer(props) {
  const darkModeClass = props.ModeOn ? 'dark-mode' : 'light-mode';
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div id="contact">
    <Container id='layout' className={darkModeClass}>
      <div className='footerlayout'>
        <span onClick={toggleContent} style={{ cursor: 'pointer' }}><div class="center-button ">Get in touch</div></span>
        <div className='row'>
          <span className='center-text footer1'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</span>
        </div>
        {showContent && (
          <Container>
            <div className='row footer2'>
              <div className='col'><BsEnvelopeAt /></div>
              <span className=' col '>sachinsanjay09522@gmail.com</span>
              <div className='col justi'><BsFiles /></div>
            </div>
            <div className='row footer2 mt-3'>
              <div className='col'><BsFillTelephoneFill /></div>
              <span className=' col '>+919444972272</span>
              <div className='col'><BsFiles /></div>
              <span className='ptext mt-5'>You may also find me on these platforms!</span>
            </div>
          </Container>
        )}
        <div className='row '>
            <div class='col '><BsGithub /></div>
            <div class='col'><BsLinkedin /></div>
            <div class='col'><BsInstagram /></div>
          </div>
          <div className='row'>
            <span className='ptext'><BsCCircle /> 2023 | Designed and coded with ❤️️ by Sagar Shah</span>
          </div>
    </div>        
  </Container>
  </div>
  )
}

export default Footer