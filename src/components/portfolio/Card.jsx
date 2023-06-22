import React from "react";
import { useState } from 'react'
import {BiChevronRight} from 'react-icons/bi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLeftCircle} from 'react-icons/ai'
import {AiFillRightCircle} from 'react-icons/ai'

const Card = ({ item }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const prevItem = () => {
    setCurrentItemIndex((currentItemIndex - 1 + item.length) % item.length);
  };

  const nextItem = () => {
    setCurrentItemIndex((currentItemIndex + 1) % item.length);
  };
  return (
    <>
      <div className="container portfolio__container">
          {item.map((Val) => {
            return (
              <article key={Val.id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={Val.image} alt={Val.title}/>
                </div>
                <h3 className='portfolio__item-title'>{Val.title}</h3>

                <span className='portfolio__button'>Demo <BiChevronRight className='portfolio__button-icon'/></span>

                <div className="portfolio__item-details">
                  <div className="portfolio__popup-subtitle">Category - <span>{Val.category}</span></div>
                  <h3 className='details__title'>{Val.title}</h3>
                  <p className='details__description'>{Val.description}</p>
                  <ul className='details__info'>
                    <li>Created - <span>{Val.created}</span></li>
                    <li>Language - <span>{Val.language}</span></li>
                    <li>Role - <span>{Val.role}</span></li>
                    <li><span className='portfolio__button'> <AiFillYoutube/><a href={Val.youtube} className='portfolio__button'> - www.youtube.com</a></span></li>
                    <li><span className='portfolio__button'> <AiFillGithub/><a href={Val.github} className='portfolio__button'> - www.github.com</a></span></li>
                  </ul>

                  <div className="portfolio__content-caption">
                    <div className="caption__text">{Val.category}</div>
                    <div className="caption__counter">{Val.id} of 7</div>
                  </div>

                  <div className="portfolio__controls">
                    <div className="prev__item" onClick={prevItem}><AiFillLeftCircle/></div>
                    <div className="next__item" onClick={nextItem}><AiFillRightCircle/></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
    </>
  );
};

export default Card;
