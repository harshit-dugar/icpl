import React, { useState } from 'react'
import "./Navigation.css"
import Logo from "../../assets/Images/ICPL_Logo.jpeg"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Navigation() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <div className='flex justify-between items-center px-7 py-6 w-90% sticky top-1 z-10 bg-white opacity-75 rounded-lg'>
            <a href='/'>
                <img src={Logo} alt='Logo_ICP' className='logo h-12 w-25'/>
            </a>
            <nav className="hidden md:block">
                <ul className="flex text-indigo-900">
                    <li className='ml-5 text-lg'>
                        <Menu
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }} allowHover>
                            <MenuHandler>
                                <button>Services</button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Web Development</MenuItem>
                                <MenuItem>Call Center Solution</MenuItem>
                                <MenuItem>Network Solution</MenuItem>
                                <MenuItem>Corporate IT Supplies</MenuItem>
                                <MenuItem>SMS Solutions</MenuItem>
                                <MenuItem>Corporate Solutions</MenuItem>
                            </MenuList>
                        </Menu>
                    </li>
                    <li className='ml-5 text-lg'>
                        <Link to="/training">Training</Link>
                    </li>
                    <li className='ml-5 text-lg'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='ml-5 text-lg'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* Mobile */}
            <nav className={!toggle ? "mobile-nav z-20 left-[-100%]" : "mobile-nav left-0"}>
                <ul className="flex flex-col text-indigo-900">
                    <li className='py-5'><a href="/">Home</a></li>
                    <li className='py-5'><a href="/#service">Services</a></li>
                    <li className='py-5'><Link to="/training">Training</Link></li>
                    <li className='py-5'><Link to="/about">About</Link></li>
                    <li className='py-5'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <button onClick={handleToggle} className="block md:hidden z-30">
                {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30}/>}
            </button>
        </div>
    )
}

export default Navigation