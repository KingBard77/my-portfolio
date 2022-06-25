import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {ImQuotesLeft} from 'react-icons/im'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar:AVTR1,
    name:'Tina Show',
    detail:'Web Developer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    detail:'Web Developer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:AVTR3,
    name:'John Doe',
    detail:'Web Developer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:AVTR4,
    name:'Kwame Despite',
    detail:'Web Developer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testiomonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar, name, detail, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="testimonial__quote">
                <ImQuotesLeft/>
              </div>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One"/>
              </div>
    
              <h5 className='client__name'>{name}</h5>
              <h3 className='client__detail'>{detail}</h3>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials