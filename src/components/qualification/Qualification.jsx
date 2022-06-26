import React from 'react'
import './qualification.css'
import {AiOutlineCalendar} from 'react-icons/ai'
import {GiGraduateCap} from 'react-icons/gi'
import {BsFillBriefcaseFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='qualification'>
      <h5>
        My Journey
      </h5>
      <h2> My Qualification</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h4 className='qualification__title'>
            <GiGraduateCap/>&nbsp;&nbsp;Education</h4>

          <div className="timeline">
            <div className="timeline__item">
              <div className="circle__dot"></div>
              <h4 className='timeline__title'>UniKL MIIT, Kampus Kota. Kuala Lumpur</h4>
              <p className='timeline__text'>Bachelor of Software Engineering (Hons)</p>
              <span className='timeline__date'><AiOutlineCalendar/>
              07/2019 - Present</span>
            </div>

            <div className="timeline__item">
              <div className="circle__dot"></div>
              <h4 className='timeline__title'>MARA Professional College, Seri Iskandar. Perak</h4>
              <p className='timeline__text'>HND Business and ICT</p>
              <span className='timeline__date'><AiOutlineCalendar/>
              12/2017 - 03/2019</span>
            </div>

            <div className="timeline__item">
              <div className="circle__dot"></div>
              <h4 className='timeline__title'>MARA Professional College, Seri Iskandar. Perak</h4>
              <p className='timeline__text'>Foundation in Business</p>
              <span className='timeline__date'><AiOutlineCalendar/>
              07/2016 - 10/2017</span>
            </div>
          </div>
        </div>

        {/* END OF EDUCATION */}


        <div className="experience__frontend">
          <h4 className='qualification__title'>
            <BsFillBriefcaseFill/>&nbsp;&nbsp;Experience</h4>

          <div className="timeline">
            <div className="timeline__item">
              <div className="circle__dot"></div>
              <h4 className='timeline__title'>Hanif Mimi Ent</h4>
              <p className='timeline__text'>Food Services</p>
              <span className='timeline__date'><AiOutlineCalendar/>
              07/2016 - Present</span>
            </div>

            <div className="timeline__item">
              <div className="circle__dot"></div>
              <h4 className='timeline__title'>Man Energy Sources Ent</h4>
              <p className='timeline__text'>Electrical Technician</p>
              <span className='timeline__date'><AiOutlineCalendar/>
              06/2020 - 12/2020</span>
            </div>

            <div className="timeline__item">
              <div className="circle__dot"></div>
              <h4 className='timeline__title'>Arshad Sdn Bhd</h4>
              <p className='timeline__text'>Retail Supervisor</p>
              <span className='timeline__date'><AiOutlineCalendar/>
              12/2015 - 06/2017</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience