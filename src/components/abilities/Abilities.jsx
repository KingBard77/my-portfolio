import React from 'react'
import './abilities.css'
import {BiCodeCurly} from 'react-icons/bi'
import {BiDownArrow} from 'react-icons/bi'
import {HiOutlineColorSwatch} from 'react-icons/hi'
import {HiOutlineDatabase} from 'react-icons/hi'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {TbBrandReact} from 'react-icons/tb'
import {TbBrandFigma} from 'react-icons/tb'
import {SiSketchup} from 'react-icons/si'
import {DiPhotoshop} from 'react-icons/di'
import {TbBrandPhp} from 'react-icons/tb'
import {TbBrandGolang} from 'react-icons/tb'
import {DiIllustrator} from 'react-icons/di'
import {TbBrandPowershell} from 'react-icons/tb'


const abilities = () => {
  return (
    <section id='abilities'>
        <h5>My Abilities</h5>
        <h2> My Experience</h2>

        <div className="abilities__container container">
          <div className="skills__tabs">
            <div className="skills__header skills__active" data-target="#frontend">
              <BiCodeCurly className='skills__icon'/>
              <div>
                <h3 className='skills__title'>Frontend Developer</h3>
                <span className='skills__subtitle'>5+ Years Experience</span>
              </div>

              <BiDownArrow className='skills__arrow'/>
            </div>

            <div className="skills__header" data-target="#design">
              <HiOutlineColorSwatch className='skills__icon'/>
              <div>
                <h3 className='skills__title'>UI / UX Design</h3>
                <span className='skills__subtitle'>2+ Years Experience</span>
              </div>

              <BiDownArrow className='skills__arrow'/>
            </div>

            <div className="skills__header" data-target="#backend">
              <HiOutlineDatabase className='skills__icon'/>
              <div>
                <h3 className='skills__title'>Backend Developer</h3>
                <span className='skills__subtitle'>3+ Years Experience</span>
              </div>
              <BiDownArrow className='skills__arrow'/>
            </div>
          </div>

          <div className="skills__content" data-centent>
            <div className="skills__group skills__active" data-content id="frontend">
              <div className="skills__list">
                <div className="skills__data">
                  <div className="skills__titles">
                    <AiOutlineHtml5 className='skills__data_icon'/><h3 className='skills__name'>HTML</h3>
                    <span className='skills__number'>Expert</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '100%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandCss3 className='skills__data_icon'/><h3 className='skills__name'>CSS</h3>
                    <span className='skills__number'>Expert</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '100%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandReact className='skills__data_icon'/><h3 className='skills__name'>React</h3>
                    <span className='skills__number'>Intermediate</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '50%'}}></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills__group" data-content id="design">
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandFigma className='skills__data_icon'/><h3 className='skills__name'>Figma</h3>
                    <span className='skills__number'>Beginner</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '25%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <SiSketchup className='skills__data_icon'/><h3 className='skills__name'>Sketch</h3>
                    <span className='skills__number'>Beginner</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '25%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <DiPhotoshop className='skills__data_icon'/><h3 className='skills__name'>Photoshop</h3>
                    <span className='skills__number'>Intermediate</span>
                  </div>
                  
                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '50%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <DiIllustrator className='skills__data_icon'/><h3 className='skills__name'>Illustrator</h3>
                    <span className='skills__number'>Intermediate</span>
                  </div>
                  
                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '50%'}}></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills__group" data-content id="backend">
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandPhp className='skills__data_icon'/><h3 className='skills__name'>PHP</h3>
                    <span className='skills__number'>Expert</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '100%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandPowershell className='skills__data_icon'/><h3 className='skills__name'>Shell</h3>
                    <span className='skills__number'>Intermediate</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '50%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandGolang className='skills__data_icon'/><h3 className='skills__name'>GoLang</h3>
                    <span className='skills__number'>Intermediate</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '50%'}}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                  <TbBrandJavascript className='skills__data_icon'/><h3 className='skills__name'>JavaScript</h3>
                    <span className='skills__number'>Intermediate</span>
                  </div>

                  <div className="skills__bar">
                    <span className='skills__percentage' style={{width: '50%'}}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default abilities