import React from 'react'
import './Aboutme.css';
import { Container } from 'react-bootstrap';
// import './App.css';
import Background from '../../Img/Background.png'
import cv_pic1 from '../../Img/cv_pic1.PNG'
import { useState } from 'react';
function Aboutme(props) {
    const darkModeClass = props.ModeOn ? 'dark-mode' : 'light-mode';
    const [showContent, setShowContent] = useState(true);
  
    const toggleContent = () => {
      setShowContent(!showContent);
      
    };
  return (
    <Container id='layout' className={darkModeClass}>
      <span id='about' onClick={toggleContent} style={{ cursor: 'pointer' }}>
        <div class="center-button">About Me</div>
        </span>
        {showContent && (
      <div className='row'>
        <div className='col mt-5'>
        <div className='col'>
                <img className='position-absolute cv1' src={cv_pic1} />
                <img className='bg1' src={Background} />
            </div>
        </div>
        <div className='col mt-5'>
          <p className='aboutmeh1'>Curious about me? Here you have it:</p>
          <p className='ptext'>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
          <p className='ptext'>I'm an aspiring web developer eager to embark on my journey in the world of web development. While I may be new to this field, I'm enthusiastic about learning and diving into the ever-evolving world of technology. I'm looking forward to building a strong foundation and gaining expertise in modern web development technologies such as Next.js, TypeScript, Nest.js, Tailwind CSS, Supabase, and more.</p>        
          <p className='ptext'>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
          <p className='ptext'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
          <p className='ptext'>Finally, some quick bits about me.</p>
          <div className='row'>
            <div className='col ptext'>
              <ul>
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
            </div>
            <div className='col ptext'>
              <ul>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
          </div>
          <p className='ptext'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
      </div>
      )}
    </Container>
    
  )
}

export default Aboutme