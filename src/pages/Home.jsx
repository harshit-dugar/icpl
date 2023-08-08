import React from 'react'
import Navigation from '../components/Vavigation/Navigation'
import Hero from '../components/Hero/Hero'
import Service from '../components/Service/Service'
import Clients from '../components/clients/Clients'

function Home() {
    return(
        <>
            <Navigation />
            <Hero />
            <Service />
            <Clients />
        </>
    )
}

export default Home