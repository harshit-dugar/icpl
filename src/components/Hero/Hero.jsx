import React from 'react'
import {AiFillLinkedin} from "react-icons/ai";

function Hero() {
    return (
        <div className='px-5 mx-4 text-white py-32 bg-blue-800 rounded-t-3xl'>
            <div className="container mx-auto flex items-center justify-center">
                <div className="pb-5 md:pb-0 flex flex-col items-center ">
                    <h1 className="text-5xl lg:text-7xl font-bold py-3">
                        Informatic Computech Pvt. Ltd.
                    </h1>
                    <p className="py-5 text-2xl">
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
            </div>
        </div>
    )
}

export default Hero