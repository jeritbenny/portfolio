import React from 'react'
import'./Home.css';
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import video from '../assets/space.mp4'
import resume from'../assets/Resume.pdf'
import photo from'../assets/pic.jpg'
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const  [text ] = useTypewriter({
    words: [  'React.js Developer','MERN Stack Developer'],
    loop: 0, // set loop to 0 for infinite loop
    typeSpeed: 120,
    deleteSpeed:100,
  });
  console.log('Current text:', text); // Debugging
  return (
    <div className='home-div'>
      
      <div className='video-container ' id='Home'>
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='content'>
      <h1 className='heading'>
      <span className='head1'>Hai,</span>
      <br/>
       <span className='head2'>I'm Jerit Benny.</span><br/>
        <span className='text'>{text}</span><span><Cursor /></span>
      </h1>
      </div>
      </div>
      {/* About section */}
   <div className='about'>

       <div className='about1'>
      
        <img src={photo} alt='profile' className='image' />
       </div>
       <div className='about2'>
        <h1 className='about-head'>.. About me ..</h1>
        <p className='about-para'>My name is Jerit Benny. I hail from India. I am a BCA graduate from Kannur University. I had 1 year work experience in React. I had also completed MERN Stack Course from Luminar Technolab, Kochi. </p>
        <button className='about-btn'>
          <a href={resume} download=' Jerit resume'>Download CV</a>
        </button>

       
       </div>

   </div>
   <div>
    <Resume/>
   </div>
   <div>
    <Projects/>
   </div>
   <div>
    <Contact/>
   </div>
  <Footer/>
    </div>
  );
}

export default Home