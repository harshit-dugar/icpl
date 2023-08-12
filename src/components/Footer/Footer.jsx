import React from 'react'
import Logo from "../../assets/Images/ICPL_Logo_footer.png";
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='px-5 mx-4 mt-4 text-white bg-indigo-900 rounded-3xl'>
            <footer className="relative w-full">
                <div className="mx-auto w-full max-w-7xl px-8">
                    <div className="grid grid-cols-1 justify-center items-center gap-4 md:grid-cols-2">
                        <div className='flex justify-center items-center'><img src={Logo} alt='Logo Icpl' className='h-12 w-25 mt-7 mx-9'/></div>
                        <div className="flex md:flex-row flex-col justify-center items-center mx-4">
                            <Link to='/' className='text-white hover:text-red-900 m-5'>Home</Link>
                            <Link to='/about' className='text-white hover:text-red-900 m-5'>About</Link>
                            <Link to='/training' className='text-white hover:text-red-900 m-5'>training</Link>
                        </div>
                    </div>
                    <div className='mt-10 flex w-full flex-col items-center justify-center border-t border-red-900 py-4 md:flex-row md:justify-center'>
                        <p>&copy; {currentYear} <a href='/' className='text-red-700'>Informatic Computech Pvt. Ltd</a>. All Rights
                        Reserved. </p>   
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer