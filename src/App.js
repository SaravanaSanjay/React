import Header from './Components/Header/Header';
import NavScrollExample from './Components/Mynavbar/Mynavbar';
import Aboutme from './Components/Aboutme/Aboutme';
import {} from 'react-bootstrap';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import './App.css';
import Work from './Components/Work/Work';
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
function App() {  
  const [option,setName] = useState('');
  const isDarkMode=(isMode)=>{
    setName(isMode)
    // alert(isMode)
  }

  console.log(option)

  return (
    <Router>
      <NavScrollExample onDarkMode={isDarkMode} />
      <Header ModeOn={option} />
      <Aboutme ModeOn={option} />
      <Skills ModeOn={option} />
      <Experience ModeOn={option} />
      <Work ModeOn={option} />
      <Testimonials ModeOn={option} />
      <Footer ModeOn={option} />
    </Router>  
  );
}

export default App;
