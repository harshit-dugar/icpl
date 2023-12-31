import React from 'react'
import { services } from '../../data'
import ServiceCarousel from "../ServiceCarousel"
import "./service.css"
import { Link } from 'react-router-dom'

function Service() {
    return (
        <div id='service' className='flex flex-col items-center md:justify-between px-5 mx-4 text-indigo-900'>
            <h2 className='md:text-6xl text-5xl font-bold mb-5 border-b-[5px] border-red-900'>Our Services</h2>
            <ServiceCarousel />
            <div className="container m-8 flex flex-col items-center md:justify-between">
                <div className='container mx-auto grid md:grid-cols-2 gap-10'>
                    {services.map((service)=>{
                        return(
                            <div className='bg-indigo-900 rounded-2xl text-white flex flex-col items-center hower'>
                                <h3 className='py-5 md:text-4xl text-xl'>{service.title}</h3>
                                <p className='py-5 md:text-2xl text-lg px-3 sm:max-w-lg mx-2 text-justify'>{service.description}</p>
                                <Link to='/service' className='border-b-2 border-red-900 mb-4 text-lg'>Read more..</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service