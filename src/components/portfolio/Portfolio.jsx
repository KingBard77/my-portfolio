import React, { useState } from 'react'
import './portfolio.css'
import {AiOutlineClose} from 'react-icons/ai'
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";



const Portfolio = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
        <Card item={item} />

      {/* Portfolio Pupup*/}

      <div className="portfolio__popup">
        <div className="portfolio__popup-inner">
          <div className="portfolio__popup-content">
            <span className="portfolio__popup-close">
              <AiOutlineClose />
            </span>

            <div className="pp__thumbnail">
              <img src='../../assets/portfolio1.jpg' alt=""/>
            </div>
            <div className="portfolio__popup-info">
              <div className="portfolio__popup-subtitle">Recent - <span>Works</span></div>
              <div className="portfolio__popup-body">
                <h3 className='details__title'>BurgerByte Inventory System</h3>
                <p className='details__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                <ul className='details__info'>
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Language - <span>HTML CSS</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#home">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
