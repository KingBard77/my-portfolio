import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My_Profile1.png'
import HeaderSocial from './HeaderSocial'
import {Typewriter} from "react-simple-typewriter";
import {FaLongArrowAltRight} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__data">
          <h5 className="home__title">Hello I'm Badrul Amin</h5>
          <h1 className="home__subtitle">Bachelor of Information Technology (Hons.) in Software Engineering</h1>
          <span style={{color: '#e1094a', fontWeight:'bold'}}>
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Frontend Developer", "Web Developer", "App Developer", "UI/UX Designer", "Backend Developer"]}
            />
            <CTA/>
          </span>
        </div>

        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <span className='scroll__down'><a href="#contact">Scroll Down </a><FaLongArrowAltRight className='scroll__down-icon'/></span>

      </div>
    </header>
  )
}

export default Header