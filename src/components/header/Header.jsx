import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My_Profile1.png'
import HeaderSocial from './HeaderSocial'
import {Typewriter} from "react-simple-typewriter";
import {FaLongArrowAltRight} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram}  from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import Floating from './floating'
import Crown from '../../assets/crown.png'
import Thumbup from '../../assets/thumbup.png'
import Glassesiemoji from '../../assets/glassesimoji.png'


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">

        <div className="i-right">
            <img src={Glassesiemoji} alt=''/>

            <div style={{top: '22rem', left: '75rem' }}>
              <Floating image={Crown} txt1='Software' txt2='Engineer'/>
            </div>

            <div style={{top: '38rem', left: '46rem' }}>
              <a href="#about"><Floating image={Thumbup} txt1='Web' txt2='Developer'/></a>
            </div>
          </div>

        <div className="header__data">
          <h5 className="home__title">Hello, I'm Badrul Amin</h5>
          <h1 className="home__subtitle">Bachelor of Information Technology (Hons.) in Software Engineering</h1>
          and I'm a <span style={{color: '#00a78e', fontWeight:'bold'}}> 
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Frontend Developer", "Web Developer", "App Developer", "UI/UX Designer", "Backend Developer"]}
            />
          </span>

          <p className='home__description'> I help our clients create <span>brands</span>,
          build digital <span>products</span> and <span>services</span>, innovate, <br/> find oppurtunities,
          and validate ideas.</p>
          
          <CTA/>

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