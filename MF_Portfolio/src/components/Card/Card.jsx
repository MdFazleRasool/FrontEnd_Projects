import React from 'react'
import "./Card.css"
function Card({title,image}) {
  return (
    <div className='Card'>
        <h1>{title} </h1>
        <div className='hoverCard'>
            <img src= {image} alt='' />
        </div>
    </div>
  )
}

export default Card