import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My_Profile1.png'
import HeaderSocial from './HeaderSocial'
import {Typewriter} from "react-simple-typewriter";
import {BiRightArrowAlt} from 'react-icons/bi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5 className="home__title">Hello I'm Badrul Amin</h5>
          <h1 className="home__subtitle">I'm a Web Developer</h1>
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

        <a href="#contact" className='scroll__down'>Scroll Down <BiRightArrowAlt className='header__socials-icon'/></a>
      </div>
    </header>
  )
}

export default Header