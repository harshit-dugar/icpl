import React, { useState } from 'react'
import "./Navigation.css"
import Logo from "../../assets/Images/ICPL_Logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navigation() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <div className='flex justify-between items-center px-7 py-6 w-full sticky top-1 z-10 bg-indigo-100 rounded-xl'>
            <a href='/'>
                <img src={Logo} alt='Logo_ICP' className='logo h-12 w-25 z-30'/>
            </a>
            <nav className="hidden md:block">
                <ul className="flex text-indigo-900">
                    <li className='ml-5 text-lg hover:scale-125'>
                        <Link to="/service">Services</Link> 
                    </li>
                    <li className='ml-5 text-lg hover:scale-125'>
                        <Link to="/training">Training</Link>
                    </li>
                    <li className='ml-5 text-lg hover:scale-125'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='ml-5 text-lg hover:scale-125'>
                        <Link to="/contactus">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* Mobile */}
            <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
                <a href='/'>
                    <img src={Logo} alt='Logo_ICP' className='logo h-12 w-25 z-30'/>
                </a>
                <ul className="flex flex-col text-indigo-900">
                    <li className='py-5'><a href="/">Home</a></li>
                    <li className='py-5'><Link to="/service">Services</Link></li>
                    <li className='py-5'><Link to="/training">Training</Link></li>
                    <li className='py-5'><Link to="/about">About</Link></li>
                    <li className='py-5'><Link to="/contactus">Contact</Link></li>
                </ul>
            </nav>
            <button onClick={handleToggle} className="block md:hidden z-30">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30}/>}
            </button>
        </div>
    )
}

export default Navigation