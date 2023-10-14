import React from 'react'
import './about.css'
import ME from '../../assets/My_Profile3.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BiSupport} from 'react-icons/bi'
import {FaRegPaperPlane} from 'react-icons/fa'
import { motion } from "framer-motion";


const About = () => {
  
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <motion.h2
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} // animate to full opacity and original position
        transition={{ type: "spring", stiffness: 50, delay: 0.1 }} // control the animation type, speed, and start delay
      >
        About Me
      </motion.h2>

      <div className="container about__container">
        <div className="about__me" >
          <div className="about__me-image">
            <img src={ME} alt="About Me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>9+ Completed</small>
            </article>

            <article className='about__card'>
              <BiSupport className='about__icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>

          <motion.h3
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.2 }} 
          >
            Hi, I'm Badrul Amin bin Hairul Kholidin, Based in Selangor
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }} 
          >
            Enthusiastic and detail-oriented Software Engineer with a strong academicbackground and less than one year of professional experience. 
            I possess a passionfor creating and implementing innovative software solutions, developed throughrigorous studies and hands-on projects. 
            My understanding of the softwaredevelopment lifecycle and commitment to delivering high-quality products make mea valuable asset to any software engineering team. 
            I am eager to leverage myprogramming skills and contribute to a full-time position in the field of SoftwareEngineering, supporting a company's future growth and success.
          </motion.p>

          <a href="#contact" className="btn btn-primary">Let's Talk  <FaRegPaperPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About