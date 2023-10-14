import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/badrul-amin-762000225/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/KingBard77" target="__blank"><BsGithub/></a>
        <a href="https://www.instagram.com/bard_7/" target="__blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial