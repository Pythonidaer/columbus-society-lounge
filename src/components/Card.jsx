import React from 'react'

const Card = ({ imageSrc, title }) => {
  return (
    <article className='card'>
      <div className='card-image-container'>
        <img className='card-image' src={imageSrc} alt='Sample Image' />
      </div>
      <div className='card-content'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>Every Someday: 1700</p>
        <a href='#' className='card-link'>
          Membership
        </a>
      </div>
    </article>
  )
}

export default Card
