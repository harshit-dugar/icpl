import React from 'react'
import { services } from '../../data'
import ServiceCarousel from "../ServiceCarousel"
import "./service.css"

function Service() {
    return (
        <div className='flex flex-col items-center md:justify-between px-5 mx-4 text-indigo-900'>
            <h2 className='text-8xl font-bold mb-5 border-b-[5px] border-red-900'>Our Services</h2>
            <ServiceCarousel />
            <div className="container m-8 flex flex-col items-center md:justify-between">
                <div className='container mx-auto grid md:grid-cols-2 gap-10'>
                    {services.map((service)=>{
                        return(
                            <div className='bg-indigo-900 rounded-2xl text-white flex flex-col items-center hower'>
                                <h3 className='py-5 text-4xl'>{service.title}</h3>
                                <p className='py-5 text-2xl max-w-lg'>{service.description}</p>
                                <a href='/' className=''>Ream More..</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service