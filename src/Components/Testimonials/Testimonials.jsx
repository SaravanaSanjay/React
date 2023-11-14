import React from 'react'
import { Container } from 'react-bootstrap'
import peopleicone from '../../Img/peopleicone.png'
import './Testimonials.css'
import { useState } from 'react'
function Testimonials (){
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <Container id='layout'>
        <span id='test' onClick={toggleContent} style={{ cursor: 'pointer' }}>
            <div class="row center-button ">Testimonials</div>
        </span>
        <div className='row'>
            <span className='center-text'>Nice things people have said about me:</span>
        </div>
        {showContent && (
        <div className='row mt-5 ' >
            <div className='col testlayout shadow rounded mx-3' >
                <img className='skillicon' src={peopleicone} />
                <div className='row ptext'>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</div>
                <div className='row mt- btext text-center'>
                John Doe
                <div className='row ptext'>Founder - xyz.com</div>
                </div>           
            </div>
            <div className='col testlayout shadow rounded mx-3'>
                <img className='skillicon' src={peopleicone} />
                <div className='row ptext'>“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”</div>
                <div className='row mt- btext text-center '>
                John Doe
                <div className='row ptext'>Founder - abc.com</div>
                </div>           
            </div>
            <div className='col testlayout shadow rounded mx-3'>
                <img className='skillicon' src={peopleicone} />
                <div className='row ptext'>“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”</div>
                <div className='row mt- btext text-center'>
                John Doe
                <div className='row ptext'>Freelancer</div>
                </div>            
            </div>
        </div>
        )}
    </Container>
  )
}

export default Testimonials