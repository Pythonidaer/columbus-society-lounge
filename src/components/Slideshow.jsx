import React from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../Slideshow.css' // Import your CSS file

const Slideshow = () => {
  return (
    <Carousel
      infiniteLoop={true}
      dynamicHeight={true}
      autoPlay={true}
      interval={5000}
    >
      <div>
        <img src='/assets/image1.jpg' alt='Slide 1' />
      </div>
      <div>
        <img src='/assets/image3.jpg' alt='Slide 3' />
      </div>
      <div>
        <img src='/assets/image4.jpg' alt='Slide 3' />
      </div>
      <div>
        <img src='/assets/image5.jpg' alt='Slide 3' />
      </div>
    </Carousel>
  )
}

export default Slideshow
