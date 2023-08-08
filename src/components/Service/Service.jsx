import React from 'react'
import { services } from '../../data'
import ServiceCarousel from "../ServiceCarousel"

function Service() {
    return (
        <div className='flex flex-col items-center md:justify-between px-5 mx-4 text-blue-800'>
            <h2 className='text-6xl font-bold mb-5'>Our Services</h2>
            <ServiceCarousel />
            <div className="container m-8 flex flex-col items-center md:justify-between">
                <div className='container mx-auto grid md:grid-cols-2 gap-10'>
                    {services.map((service)=>{
                        return(
                            <div className='bg-blue-800 rounded-2xl text-white'>
                                <h3 className='py-5 text-2xl'>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service