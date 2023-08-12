import React from 'react'
import Navigation from '../components/Vavigation/Navigation'
import Hero from '../components/Hero/Hero'
import Service from '../components/Service/Service'
import Clients from '../components/clients/Clients'
import Footer from '../components/Footer/Footer'
import ContactUs from '../components/ContactUs'

function Home() {
    return(
        <>
            <Navigation />
            <Hero />
            <Service />
            <Clients />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home