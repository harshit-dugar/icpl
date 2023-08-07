import React, { useState } from 'react'
import "./Navigation.css"
import Logo from "../../assets/Images/ICPL_Logo.jpeg"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <div className='flex justify-between items-center px-7 py-6 w-full'>
            <a href='/'>
                <img src={Logo} alt='Logo_ICP' className='logo h-12 w-25'/>
            </a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li className='ml-5 text-lg'>
                        <a href="/#blog">Services</a>
                    </li>
                    <li className='ml-5 text-lg'>
                        <a href="/#projects">Training</a>
                    </li>
                    <li className='ml-5 text-lg'>
                        <a href="/#about">About</a>
                    </li>
                    <li className='ml-5 text-lg'>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            {/* Mobile */}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#service">Services</a></li>
                    <li><a href="/#training">Training</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30}/>}
            </button>
        </div>
    )
}

export default Navigation