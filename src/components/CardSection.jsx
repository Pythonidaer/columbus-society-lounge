import React from 'react'
import Card from './Card'
import CarouselCard from './CarouselCard'
import { Carousel } from 'react-responsive-carousel'
/*
     <Card
          imageSrc='../../public/assets/image3.jpg'
          title='Special Events'
        />
        */

const CardSection = () => {
  return (
    <section>
      <div className='card-container'>
        <Card imageSrc='/assets/image1.jpg' title='Monthly Meeting' />
        <CarouselCard title='Special Events' />
        <Card imageSrc='/assets/image5.jpg' title='Lounge Activities' />
      </div>
    </section>
  )
}

export default CardSection
