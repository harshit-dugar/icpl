import React from 'react'
import Contact from "../assets/Images/ContactUs.png"
import { AiFillMail } from 'react-icons/ai'

function ContactUs() {
    return (
        <div className='flex flex-col items-center md:justify-between px-5 mx-4 text-indigo-900'>
            <h2 className='md:text-8xl text-5xl font-bold mb-5 border-b-[5px] border-red-900'>Contact Us</h2>
            <p className='md:text-xl text-lg text-center mb-5'><span className='text-red-800'>Let's</span> work together</p>
            <div className='flex sm:flex-row flex-col justify-around items-center mb-16 w-full'>
                <div className=''>
                    <h3 className='md:text-4xl text-2xl font-bold mb-5'>Email<AiFillMail className='inline mx-3'/> </h3>
                    <p className='md:text-xl text-lg mb-5'>info@icpljpr.com</p>
                    
                </div>
                <div className='mix-blend-darken'>
                    <img src={Contact} alt='Contact Us' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs