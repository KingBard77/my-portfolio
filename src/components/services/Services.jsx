import React from 'react'
import './services.css'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {IoMdCode} from 'react-icons/io'
import {TbBrowser} from 'react-icons/tb'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BiChevronRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const data=[
  {
    id:1,
    icon: <IoMdCode/>,
    title: 'UI / UX Designer',
    description1: 'I create the user interface of the project. ',
    description2: 'Im using Figma, Photoshop, and Sketch technologies.',
    description3: 'I create UI / UX element interaction.',
    description4: 'Design and mockup of product for company.'
  },
  {
    id:2,
    icon: <TbBrowser/>,
    title: 'Web Development',
    description1: 'I develop the user interface of the website. ',
    description2: 'Im using HTML, CSS, and JavaScript to create the website.',
    description3: 'I create UX element interaction.',
    description4: 'Design and mockup of product for company.'
  },
  {
    id:3,
    icon: <AiOutlineAppstoreAdd/>,
    title: 'App Development',
    description1: 'I develop the user interface of the application. ',
    description2: 'lm using HTML, CSS, and JavaScript to create the application with android studio or flutter.',
    description3: 'I create UX element interaction.',
    description4: 'Design and mockup of product for company.'
  }
  
]

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      {
        data.map(({id, icon, title, description1, description2, description3, description4}) => {
          return(
            <div key={id} className="services__content">
                <div>
                  <div className="services__icon">{icon}</div>
                  <h3 className='services__title'>{title}</h3>
                </div>

                <span className='services__button'>
                  View More <BiChevronRight className='services__button-icon'/>
                </span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <span className="services__modal-close">
                      <AiOutlineClose />
                    </span>

                    <h3 className='services__modal-title'>{title}</h3>
                    <p className='services__modal-description'>{description1}</p>

                    <ul className='service__modal-services grid'>
                      <li>
                        <IoMdCheckmarkCircleOutline className='services__modal-icon'/>
                        <p className='services__modal-info'>{description1}</p>
                      </li>
                      <li>
                        <IoMdCheckmarkCircleOutline className='services__modal-icon'/>
                        <p className='services__modal-info'>{description2}</p>
                      </li>
                      <li>
                        <IoMdCheckmarkCircleOutline className='services__modal-icon'/>
                        <p className='services__modal-info'>{description3}</p>
                      </li>
                      <li>
                        <IoMdCheckmarkCircleOutline className='services__modal-icon'/>
                        <p className='services__modal-info'>{description4}</p>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            )
          })
        } 
      </div>
    </section>
  )
}

export default Services