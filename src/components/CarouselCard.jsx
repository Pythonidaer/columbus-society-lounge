import React from 'react'
import Slideshow from './Slideshow'

const CarouselCard = ({ imageSrc, title }) => {
  return (
    <article className='card'>
      <Slideshow />
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

export default CarouselCard
