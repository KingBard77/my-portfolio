import React, {useRef, useEffect} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My_Profile1.png'
import HeaderSocial from './HeaderSocial'
import {Typewriter} from "react-simple-typewriter";
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link } from 'react-scroll';


import Floating from './floating'
import Crown from '../../assets/crown.png'
import Thumbup from '../../assets/thumbup.png'
import Glassesiemoji from '../../assets/glassesimoji.png'
import {motion} from 'framer-motion'
// import Transition from '../transition/Transition.jsx'
import gsap from 'gsap'

const Header = () => {

  const header= gsap.timeline();
  const home1 = useRef(null);
  const homeimg = useRef(null);
  useEffect(() =>{
    header.from(home1.current,{
      duration: .2,
      skewX:10,
      x:-100,
      opacity:0,
    }, "-=3.5")
    header.from(homeimg.current,{
      duration: .5,
      y: -200,
      opacity:0
    }, "-=.3")
  })


  const transition = {duration : 2, type: 'spring'}

  return (
    <header id='home'>
      {/* <Transition timeline={header}/> */}
      <div className="container header__container"  >

        <div className="i-right">
          <motion.img 
          initial={{left:'-10%'}}
          whileInView={{left: '7%'}}
          transition={transition}
          src={Glassesiemoji} alt=''
          className='floating-div'/>

          <motion.div
          initial={{top: '19rem', left:'18rem'}}
          whileInView={{top: '30rem', left: '82%'}}
          transition={transition}
          style={{left: '75rem' }}
          className='floating-div'>
            <Floating image={Crown} txt1='Software' txt2='Engineer'/>
          </motion.div>

          <motion.div 
          initial={{left:'18rem', top: '39rem' }}
          whileInView={{left: '50rem'}}
          transition={transition}
          style={{top: '38rem', left: '46rem' }}
          className='floating-div'>
            <a href="#about"><Floating image={Thumbup} txt1='Web' txt2='Developer'/></a>
          </motion.div>
        </div>
        
        <div className="header__data">
          <motion.h5 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.1 }} 
          className="home__title">
            Hello, I'm Badrul Amin
          </motion.h5>

          <span className="home__subtitle">Bachelor of Information Technology (Hons.) in Software Engineering </span><br/>
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

        <span className='scroll__down'>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              Scroll Down <FaLongArrowAltRight className='scroll__down-icon'/>
          </Link>
      </span>
      </div>
    </header>
  )
}

export default Header