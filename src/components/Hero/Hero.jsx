import React from 'react'
import {AiFillLinkedin} from "react-icons/ai";
import HeroImg from "../../assets/Images/Hero.jpeg";

function Hero() {
    return (
        <div className='relative px-5 mx-4 text-white py-32 bg-indigo-900 rounded-3xl mb-11 z-0'>
            <div className="absolute md:left-0 md:text-9xl font-extrabold text-5xl -z-10 text-indigo-800">PORTFOLIO</div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="pb-5 md:pb-0 flex flex-col items-center">
                    <h1 className=" text-5xl lg:text-7xl font-bold py-3">
                        Informatic Computech Pvt. Ltd.
                    </h1>
                    <p className="py-5 md:text-4xl text-2xl max-w-3xl z-10">
                        We aim to provide you with a high quality one-stop-shop for all your IT services.
                    </p>
                    <div className="py-5">
                        <a href="https://in.linkedin.com/company/informatic-computech-p-ltd"
                        className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiFillLinkedin size={40} />{" "}
                        </a>
                    </div>
                </div>
                <div className='ml-auto md:h-1/2 h-72 md:w-1/2 w-72  mix-blend-multiply'>
                    <img src={HeroImg} alt='Hero'/>
                </div>
            </div>
        </div>
    )
}

export default Hero