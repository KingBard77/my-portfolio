import React, {useRef, useEffect} from 'react'
import './about.css'
import ME from '../../assets/My_Profile3.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BiSupport} from 'react-icons/bi'
import {FaRegPaperPlane} from 'react-icons/fa'
import Transition from '../transition/Transition.jsx'
import gsap from 'gsap'


const About = () => {

  const about= gsap.timeline();
  const about1 = useRef(null);
  const aboutimg = useRef(null);
  useEffect(() =>{
    about.from(about1.current,{
      duration: .5,
      skewX:10,
      x:-100,
      opacity:0,
    }, "-=3.5")
    about.from(aboutimg.current,{
      duration: .1,
      y: -200,
      opacity:0
    }, "-=.3")
  })

  return (
    <section id='about'>
      <Transition timeline={about}/>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" ref={aboutimg}>
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content" ref={about1}>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

            <article className='about__card'>
              <BiSupport className='about__icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>

          <h3>Hi, I'm Badrul Amin bin Hairul Kholidin, Based in Selangor</h3>
          <p>
          Seasoned, forward-looking Software Engineer with 7+ years' background studies in creating and executing innovative software solutions to enhance business productivity. Highly experienced in all aspects of the software development lifecycle and end-to-end project management, from concept through to development and delivery. I am experienced programming seeking a full-time position in the field of Softwere Engineer, where be able to use the ability and skills I have to support the organization for a company's future growth.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk  <FaRegPaperPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About