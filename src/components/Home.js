import React,{useRef} from 'react'
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
import Mouse from './Mouse';
 

function Home() {
  const trailDivRef = useRef(null);
  const  [text ] = useTypewriter({
    words: [  'React.js Developer','MERN Stack Developer'],
    loop: 0, // set loop to 0 for infinite loop
    typeSpeed: 120,
    deleteSpeed:100,
  });
  console.log('Current text:', text); // Debugging
  return (
    <div className='home-div' ref={trailDivRef}>
            <Mouse targetRef={trailDivRef} />

      <div className='video-container ' id='Home' >
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
       
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
        <p className='about-para'>Hello! I'm Jerit Benny, a passionate and dedicated MERN Stack Developer with a strong background in building and maintaining web applications. I hold a degree in Computer Application and have <span style={{color:"yellow"}}>1 year </span> of experience working with JavaScript, React.js, Node.js, and other modern web technologies. My expertise lies in creating dynamic, responsive, and user-friendly web applications that meet the needs of clients and users alike. I take pride in staying updated with the latest industry trends and continuously improving my skill set.Thank you for visiting my portfolio. </p>
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