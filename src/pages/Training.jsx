import React from 'react'
import Navigation from '../components/Vavigation/Navigation'
import ServiceCarousel from '../components/ServiceCarousel'
import TrainingCard from '../components/Training/TrainingCard'
import Footer from '../components/Footer/Footer'

function Training() {
  return (
    <>
      <Navigation/>
      <ServiceCarousel/>
      <TrainingCard/>
      <Footer/>
    </>
  )
}

export default Training