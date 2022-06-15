import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My_Profile1.png'
import HeaderSocial from './HeaderSocial'
import {Typewriter} from "react-simple-typewriter";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Badrul Amin</h1>
        <span style={{color: '#ffffff99', fontWeight:'bold'}}>
          <Typewriter
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["Software Engineering", "Web Developer", "Android Developer"]}
          />
        </span>

        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header