import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar3.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar1.jpg'
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
    name:'Muhammad Faris Khairul Anuar',
    detail:'Photographer & Videographer',
    review: 'You made it so simple. My new site is so much faster and easier to work with than my old site.'
  },
  {
    avatar:AVTR2,
    name:'Khairie Kamal',
    detail:'Business Owner',
    review: 'Good design, good code, good support, good everything. LOVE IT!'
  },
  {
    avatar:AVTR3,
    name:'Hannah Delisha',
    detail:'Art Director',
    review: 'Badrul is a great developer. He is very professional and easy to work with. I highly recommend him.'
  },
  {
    avatar:AVTR4,
    name:'Ahmad Haikal Zamri',
    detail:'Project Manager',
    review: 'His work is very professional and he is very responsive. I will definitely work with him again.'
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