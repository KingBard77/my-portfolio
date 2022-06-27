import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import {AiOutlineClose} from 'react-icons/ai'
import {BiChevronRight} from 'react-icons/bi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {useEffect} from 'react';
import mixitup from 'mixitup'
import { useState } from 'react'

const data = [{
  id: 1,
  category: 'web',
  image: IMG1,
  title: 'BurgerByte Inventory Management System',
  description: 'Web-System for BurgerByte Retail Business that manages Inventory and Sales for every their daily business.',
  created: '3 Jun 2022',
  language: 'Bootstrap5, PHP, MySQL, JavaScript',
  role: 'Frontend, Backend',
  github: 'https://github.com',
  youtube: 'https://youtu.be/9vmEpYy365M'
},
{
  id: 2,
  category: 'app',
  image: IMG2,
  title: 'Railway Booking Management Web-System',
  description: 'Web-System for Railway Booking Management that allow user to book ticket for difference type of user, route with provided discount for selected user. ',
  created: '21 Apr 2021',
  language: 'Bootstrap4, C#, MySQL',
  role: 'Frontend, Backend',
  github: 'https://github.com',
  youtube: 'https://youtu.be/EUr2ih0S8K4'
},
{
  id: 3,
  category: 'design',
  image: IMG3,
  title: 'Face Recognizer Project of Artificial Intelligence',
  description: 'Graphical User Interface (GUI) that will use as a platform and an open webcam to detect faces and validation check is the user can enter a home not, then save the result into the database. ',
  created: '21 Apr 2021',
  language: 'Python',
  role: 'Frontend, Backend',
  github: 'https://github.com',
  youtube: 'https://youtu.be/4SS0CmGLLi0'
},
{
  id: 4,
  category: 'design',
  image: IMG4,
  title: 'My Portfolio Website',
  description: 'Web-System about myself that I can share my portfolio and my skills and experience.',
  created: '23 June 2022',
  language: 'React, JavaScript, HTML, CSS',
  role: 'Frontend',
  github: 'https://github.com',
  youtube: 'https://youtu.be/4SS0CmGLLi0'
}
]

const Portfolio = () => {


  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
        <div className="portfolio__filters">
          <span className="portfolio__tab active__portfolio" data-filter="all">All</span>
          <span className="portfolio__tab" data-filter=".web">Web</span>
          <span className="portfolio__tab" data-filter=".app">App</span>
          <span className="portfolio__tab" data-filter=".design">Design</span>
        </div>

        <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, created, language, role, github, youtube}) => {
            return(
            <article key={id} className='portfolio__item mix {datatarget}'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3 className='portfolio__item-title'>{title}</h3>

              <span className='portfolio__button'>Demo <BiChevronRight className='portfolio__button-icon'/></span>

              <div className="portfolio__item-details">
                <h3 className='details__title'>{title}</h3>
                <p className='details__description'>{description}</p>
                <ul className='details__info'>
                  <li>Created - <span>{created}</span></li>
                  <li>Language - <span>{language}</span></li>
                  <li>Role - <span>{role}</span></li>
                  <li><AiFillYoutube className='portfolio__button-social'/> - <span><a href={youtube}>www.youtube.com</a></span></li>
                  <li><AiFillGithub className='portfolio__button-social'/> - <span><a href={github}>www.github.com</a></span></li>
                </ul>
              </div>
            </article>
            )
          })
        } 
      </div>

      
      {/* Portfolio Pupup*/}

      <div className="portfolio__popup">
        <div className="portfolio__popup-inner">
          <div className="portfolio__popup-content">
            <span className="portfolio__popup-close">
              <AiOutlineClose />
            </span>

            <div className="pp__thumbnail">
              <img src={IMG1} alt="" className='portfolio__popup'/>
            </div>
            <div className="portfolio__popup-info">
              <div className="portfolio__popup-subtitle">Featured - <span>Design</span></div>
              <div className="portfolio__popup-body">
                <h3 className='details__title'>BurgerByte Inventory System</h3>
                <p className='details__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                <ul className='details__info'>
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Language - <span>HTML CSS</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio