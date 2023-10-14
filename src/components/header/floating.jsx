import React from 'react'
import './floating.css'

const floating = ({image, txt1, txt2}) => {
  return (
    <div className ="floatingdiv">
        <img src={image} alt=''/>
        <span>
            {txt1} {txt2}
        </span>
    </div>
  )
}

export default floating