import React, { useState } from 'react'
import './portfolio.css'
import {AiOutlineClose} from 'react-icons/ai'
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import {AiFillLeftCircle} from 'react-icons/ai'
import {AiFillRightCircle} from 'react-icons/ai'

const Portfolio = () => {
  const [item, setItem] = useState(Data);
  const [filteredItems, setFilteredItems] = useState(Data);
  const [currentItem, setCurrentItem] = useState(Data[0]);
  const allCategories = ['All', ...new Set(Data.map(item => item.category))];

  const filterItem = (curcat) => {
    const newItem = curcat === "All" ? Data : Data.filter((newVal) => newVal.category === curcat);
    setItem(newItem);
    setFilteredItems(newItem);
  };

  const currentItemIndex = filteredItems.findIndex(i => i.id === currentItem.id);

  const prevItem = () => {
    const prevIndex = (currentItemIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentItem(filteredItems[prevIndex]);
  };

  const nextItem = () => {
    const nextIndex = (currentItemIndex + 1) % filteredItems.length;
    setCurrentItem(filteredItems[nextIndex]);
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={allCategories}
        />
        <Card item={item} prevItem={prevItem} nextItem={nextItem} currentItem={currentItem}/>

      {/* Portfolio Popup */}

      <div className="portfolio__popup">
        <div className="portfolio__popup-inner">
          <div className="portfolio__popup-content">
            <span className="portfolio__popup-close">
              <AiOutlineClose />
            </span>
            <div className="pp__thumbnail">
              <img src={currentItem.image} alt={currentItem.title}/>
            </div>

            <div className="portfolio__popup-info">
              <div className="portfolio__popup-body">
                <h3 className='details__title'>{currentItem.title}</h3>
                <p className='details__description'>{currentItem.description}</p>
                <ul className='details__info'>
                  <li>Created - <span>{currentItem.created}</span></li>
                  <li>Language - <span>{currentItem.language}</span></li>
                  <li>Role - <span>{currentItem.role}</span></li>
                  <li>View - <span><a href={currentItem.github}>{currentItem.github}</a></span></li>
                </ul>
              </div>
            </div>

            <div className="navigation">
              <div className="caption__content">
                <div className="caption__text">Web</div>
                <div className="caption__counter">{currentItemIndex + 1} of {filteredItems.length}</div>
              </div>

              <div className="portfolio__controls">
                <div className="prev__item" onClick={prevItem}><AiFillLeftCircle/></div>
                <div className="next__item" onClick={nextItem}><AiFillRightCircle/></div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Portfolio;
