import React from 'react'
import './Skills.css'
import { Container, Row } from 'react-bootstrap'
import Tech from '../../Img/Tech.png'
import Tech1 from '../../Img/Tech1.png'
import Tech2 from '../../Img/Tech2.png'
import Tech3 from '../../Img/Tech3.png'
import Tech4 from '../../Img/Tech4.png'
import Tech5 from '../../Img/Tech5.png'
import Tech6 from '../../Img/Tech6.jpg'
import Tech7 from '../../Img/Tech7.png'
import Tech8 from '../../Img/Tech8.png'
import Tech9 from '../../Img/Tech9.jpg'
import Tech10 from '../../Img/Tech10.png'
import Tech11 from '../../Img/Tech11.jpg'
import { useState } from 'react'
function Skills (props){
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
    setShowContent(!showContent);
    
  };
  return (
  <Container id='layout'>
    <span onClick={toggleContent} style={{ cursor: 'pointer' }}>
        <div class="row center-button ">Skills</div>
    </span>
    
    <div className='row'>
        <span className='center-text'>The skills, tools and technologies I am really good at:</span>
    </div>
    {showContent && (
    <Container className='mt-3'>
        <div className='row'>
            <div className="col-lg-12 col-md-12">
                <div className="row mt-5 text-center justify-content-evenly">
                    <div className='col'>
                            <img className='skillicon ' src={Tech}></img>
                        <div className='ptext'>Java Script</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech1}></img>
                        <div className='ptext'>PostgreSQL</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech2}></img>
                        <div className='ptext'>MongoDB</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech3}></img>
                        <div className='ptext'>Figma</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech4}></img>
                        <div className='ptext'>Git</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech5}></img>
                        <div className='ptext'>Node.js</div>
                    </div>
                </div>
                <div className="row mt-5 text-center justify-content-evenly">
                    <div className='col '>
                        <img className='skillicon' src={Tech6}></img>
                        <div className='ptext'>Data Mining</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech7}></img>
                        <div className='ptext'>PHP</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech8}></img>
                        <div className='ptext'>HTML & CSS</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech9}></img>
                        <div className='ptext'>Bootstrap</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech10}></img>
                        <div className='ptext'>Python</div>
                    </div>
                    <div className='col'>
                        <img className='skillicon' src={Tech11}></img>
                        <div className='ptext'>ASP .Net MVC</div>
                    </div>
                </div>

            </div>
            
        </div>
       
    </Container>
     )}

  </Container>
  )
}

export default Skills