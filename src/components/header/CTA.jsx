import React from 'react'
import CV from '../../assets/Resume.pdf'
import {FaDownload} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn btn-primary'>Resume <FaDownload className='.header__socials-icon' /></a>
        <a href="#about" className='btn'>About Me <FaUser/></a>
    </div>
  )
}

export default CTA