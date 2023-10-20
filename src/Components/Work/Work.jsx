import React from 'react'
import { Container } from 'react-bootstrap'
import Work1 from '../../Img/Work1.PNG'
import Work2 from '../../Img/Work2.PNG'
import Work3 from '../../Img/Work3.PNG'
import Work4 from '../../Img/Work4.PNG'
import './Work.css'
import { useState } from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
function Work (props){
    const darkModeClass = props.ModeOn ? 'dark-mode' : 'light-mode';
    const [showContent, setShowContent] = useState(true); 

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <Container id='layout'className={darkModeClass}>
        <span id='work' onClick={toggleContent} style={{ cursor: 'pointer' }}>
            <div class="row center-button ">Work</div>
        </span>
        <div className='row'>
            <span className='center-text'>Some of the noteworthy projects I have built:</span>
        </div>
        {showContent && (
            <Container>
            <div className='row shadow rounded mt-5'>
                <div className='col'>
                    <img className='work1' src={Work1} />
                    <img className='work1' src={Work2} />
                </div>
                <div className='col'>
                    <span className='btext'>Landing Page</span>
                    <div className='col mt-3 ptext'>
                        A website landing page is a critical component of any online presence, often serving as the virtual storefront of a business or entity. This initial webpage is specifically designed to capture a visitor's attention and direct them toward a particular action, such as making a purchase, signing up for a newsletter, or filling out a contact form.
                    </div>
                    <div className='row mt-3'>
                    <div className='grid'>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JAVA SCRIPT</div>
                            <div>BOOTSTRAP</div>
                            <div>GIT HUB</div>
                    </div>
                    <div className='col'>
                        <a href='https://saravanasanjay.github.io/FigmaToWeb/'><BsBoxArrowUpRight style={{ color: 'gray' }}/></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row shadow rounded mt-5'>
                <div className='col'>
                    <span className='btext'>Landing Page</span>
                    <div className='col mt-3 ptext'>
                        A website landing page is a critical component of any online presence, often serving as the virtual storefront of a business or entity. This initial webpage is specifically designed to capture a visitor's attention and direct them toward a particular action, such as making a purchase, signing up for a newsletter, or filling out a contact form.
                    </div>
                    <div className='row mt-3'>
                        <div className='grid'>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JAVA SCRIPT</div>
                            <div>REACT</div>
                            <div>BOOTSTRAP</div>
                            <div>GIT HUB</div>
                        </div>
                    </div>
                    <div className='col'>
                        <BsBoxArrowUpRight />
                    </div>
                </div>
                <div className='col'>
                    <img className='row work1' src={Work3} />
                    <img className='row work1' src={Work4} />
                </div>
            </div>
        </Container>
        )}
    </Container>
  )
}

export default Work