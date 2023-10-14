import React, { useState } from 'react'
import './qualification.css'
import {AiOutlineCalendar, AiOutlineClose} from 'react-icons/ai'
import {GiGraduateCap} from 'react-icons/gi'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {BiChevronRight} from 'react-icons/bi'
import { BsDashLg } from 'react-icons/bs'
import data_experience from './data/experienceData';
import data_education from './data/educationData';

const Experience = () => {
    // An array of boolean values, all initially set to false, to control each modal's visibility
    const [activeModal, setActiveModal] = useState(data_experience.map(() => false));

    // Function to handle clicking "View More"
    const handleModalToggle = index => {
      const newActiveModal = [...activeModal];
      newActiveModal[index] = !newActiveModal[index];
      setActiveModal(newActiveModal);
    };

    // Function to handle clicking the "X" button
    const handleModalClose = index => {
      const newActiveModal = [...activeModal];
      newActiveModal[index] = false;
      setActiveModal(newActiveModal);
    };

    // An array of boolean values, all initially set to false, to control each modal's visibility
    const [activeEducationModal, setActiveEducationModal] = useState(data_education.map(() => false));

    // Function to handle clicking "View More"
    const handleEducationModalToggle = index => {
      const newActiveEducationModal = [...activeEducationModal];
      newActiveEducationModal[index] = !newActiveEducationModal[index];
      setActiveEducationModal(newActiveEducationModal);
    }

    // Function to handle clicking the "X" button
    const handleEducationModalClose = index => {
      const newActiveEducationModal = [...activeEducationModal];
      newActiveEducationModal[index] = false;
      setActiveEducationModal(newActiveEducationModal);
    };

  return (
    <section id='qualification'>
      <h5>
        My Journey
      </h5>
      <h2> My Qualification</h2>

      <div className="container experience__container">
        {/* START OF EDUCATION */}
        <div className="experience__frontend">
          <h4 className='qualification__title'>
            <GiGraduateCap/>&nbsp;&nbsp;Education</h4>

          <div className="timeline">
            {
              data_education.map(({id, logo, courses, university, duration, description1, description2, description3, description4}, index) => {
                return(
                  <div key={id} className="timeline__item">
                    <div className="circle__dot"></div>
                    <h4 className='timeline__title'>{university}</h4>
                    <p className='timeline__text'>{courses}</p>
                    <span className='timeline__date'><AiOutlineCalendar/>
                    {duration}</span>

                    <span className='qualification__button' onClick={() => handleEducationModalToggle(index)}>
                      View More <BiChevronRight className='qualification__button-icon'/>
                    </span>

                    {/* QUALIFICATION MODAL */}
                    <div className={`modal ${activeEducationModal[index] ? 'active-modal' : ''}`}>
                      <div className="modal-content">
                        <span className="modal-close" onClick={() => handleEducationModalClose(index)}>
                          <AiOutlineClose />
                        </span>
                        
                        <div className="modal-header">
                          <div className="modal-title-container">
                              <img src={data_education[index].logo} alt={`${data_education[index].company} Logo`} className='modal-logo'/>
                              <h3 className='modal-title'>{university}</h3>
                          </div>
                        </div>
                        <p className='modal-subtitle'><b>{courses}</b></p>

                        <ul className='qualification__modal-qualifications grid'>
                          <li>
                            <BsDashLg className='modal-icon'/>
                            <p className='modal-info'>{description1}</p>
                          </li>
                          <li>
                            <BsDashLg className='modal-icon'/>
                            <p className='modal-info'>{description2}</p>
                          </li>
                          <li>
                            <BsDashLg className='modal-icon'/>
                            <p className='modal-info'>{description3}</p>
                          </li>
                          <li>
                            <BsDashLg className='modal-icon'/>
                            <p className='modal-info'>{description4}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* END OF EDUCATION */}

        {/* START OF EXPERIENCE */}
        <div className="experience__frontend">
          <h4 className='qualification__title'>
            <BsFillBriefcaseFill/>&nbsp;&nbsp;Experience</h4>

          <div className="timeline">
          {
            data_experience.map(({id, company, title, duration, description1, description2, description3, description4}, index) => {
              return(
                <div key={id} className="timeline__item">
                  <div className="circle__dot"></div>
                  <h4 className='timeline__title'>{company}</h4>
                  <p className='timeline__text'>{title}</p>
                  <span className='timeline__date'><AiOutlineCalendar/>
                  {duration}</span>

                  <span className='qualification__button' onClick={() => handleModalToggle(index)}>
                      View More <BiChevronRight className='qualification__button-icon'/>
                    </span>
      
                  {/* EXPERIENCE MODAL */}
                  <div className={`modal ${activeModal[index] ? 'active-modal' : ''}`}>
                    <div className="modal-content">
                      <span className="modal-close" onClick={() => handleModalClose(index)}>
                        <AiOutlineClose />
                      </span>

                      <div className="modal-header">
                        <div className="modal-title-container">
                            <img src={data_experience[index].logo} alt={`${data_experience[index].company} Logo`} className='modal-logo'/>
                            <h3 className='modal-title'>{company}</h3>
                        </div>
                      </div>

                      <ul className='qualification__modal-qualifications grid'>
                        <li>
                          <BsDashLg className='modal-icon'/>
                          <p className='modal-info'>{description1}</p>
                        </li>
                        <li>
                          <BsDashLg className='modal-icon'/>
                          <p className='modal-info'>{description2}</p>
                        </li>
                        <li>
                          <BsDashLg className='modal-icon'/>
                          <p className='modal-info'>{description3}</p>
                        </li>
                        <li>
                          <BsDashLg className='modal-icon'/>
                          <p className='modal-info'>{description4}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                )
              })
            } 
          </div>
        </div>
        {/* END OF EXPERIENCE */}
      </div>
    </section>
  )
}

export default Experience