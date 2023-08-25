import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SecondSection from './components/SecondSection'
import Slideshow from './components/Slideshow'
import CardSection from './components/CardSection'
import Footer from './components/Footer'
import './App.css'
// <Slideshow />

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <CardSection />
      <Footer />
    </>
  )
}

export default App
