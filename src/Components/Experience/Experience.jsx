import React from 'react'
import { Container } from 'react-bootstrap'
import project from '../../Img/project.jpg'
import'./Experience.css'
import { useState } from 'react'
const Experience = (props) => {
    const darkModeClass = props.ModeOn ? 'dark-mode' : 'light-mode';
    const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <Container id='layout' >
      <span onClick={toggleContent} style={{ cursor: 'pointer' }}><div class="center-button">Projects</div></span>
        <div className='row'>
          <span className='center-text'>Here is a quick summary of my most recent Projects:</span>
        </div>
    {showContent && (
        <Container id ='layout'>
        <div className='row1 shadow rounded mt-5'>
            <div className='col'>
                <img className='logo1' src={project} />
            </div>
            <div className='col ptext'>
                <span><b className='btext'>IOT Project</b></span>
                <ul> 
                    <li>Designed and completed a mini project in Third year.</li>
                    <li>AUTOMATIC RAILWAY CONTROL SYSTEM USING IOT.</li>
                </ul>
            </div>
            <div className='col ptext'>
                <span>May 2022</span>
            </div>
        </div>
        <div className='row1 shadow rounded mt-5'>
            <div className='col'>
                <img className='logo1' src={project} />
            </div>
            <div className='col ptext'>
                <span><b className='btext'>PHP Project</b></span>
                <ul> 
                    <li>Designed and completed a mini project in Final year.</li>
                    <li>FREE SLOT TIMTABLE MANAGEMENT SYSTEM USING PHP .</li>
                </ul>
            </div>
            <div className='col ptext'>
                <span>Nov 2022</span>
            </div>
        </div>
        <div className='row1 shadow rounded mt-5'>
            <div className='col'>
                <img className='logo1' src={project} />
            </div>
            <div className='col ptext'>
                <span className='btext'>DATA MINING Project</span>
                <ul>
                    <li>Designed and completed a project in Final Year.</li>
                    <li>PATIENT - RISK IDENTIFICATION USING PROCESS MINING .</li>
                </ul>
            </div>
            <div className='col ptext'>
                <span>May 2023</span>
            </div>
            
        </div>
        </Container>
    )}
    </Container>
  )
}

export default Experience