import React from 'react'
import './Projects.css'
import image from'../assets/pic.jpg'
import Slider from "react-slick";
import { cards } from './Menudata';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Projects() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='wrapper' id='Project'>
      <h1 className='pro-head'>Projects</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className='card'>
            <img src={card.image} alt='project' />
            <div className='info'>
              <h1>{card.heading}</h1>
              <p>{card.description}</p>
              <div>
                <button>
                  <a href={card.link1}><i class="fa-brands fa-github"></i></a>
                </button>
                <button>
                  <a href={card.link2}><i class="fa-solid fa-link"></i></a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
  )
}

export default Projects