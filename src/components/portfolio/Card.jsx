import React from "react";
import {BiChevronRight} from 'react-icons/bi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Card = ({ item }) => {
  return (
    <>
      <div className="container portfolio__container">
          {item.map((Val) => {
            return (
              <article key={Val.id} className='portfolio__item mix {category}'>
              <div className="portfolio__item-image">
                <img src={Val.image} alt={Val.title}/>
              </div>
              <h3 className='portfolio__item-title'>{Val.title}</h3>

              <span className='portfolio__button'>Demo <BiChevronRight className='portfolio__button-icon'/></span>

              <div className="portfolio__item-details">
                <h3 className='details__title'>{Val.title}</h3>
                <p className='details__description'>{Val.description}</p>
                <ul className='details__info'>
                  <li>Created - <span>{Val.created}</span></li>
                  <li>Language - <span>{Val.language}</span></li>
                  <li>Role - <span>{Val.role}</span></li>
                  <li><AiFillYoutube className='portfolio__button-social'/> - <span><a href={Val.youtube}>www.youtube.com</a></span></li>
                  <li><AiFillGithub className='portfolio__button-social'/> - <span><a href={Val.github}>www.github.com</a></span></li>
                </ul>
              </div>
            </article>
            );
          })}
        </div>
    </>
  );
};

export default Card;
