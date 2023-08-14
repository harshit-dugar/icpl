import React from 'react'

function AboutUs() {
    return (
        <div className='container flex flex-col items-center justify-start px-5 mx-4'>
            <h2 className='md:text-6xl text-5xl text-indigo-900 font-bold mb-5 border-b-[5px] border-red-900'>About Us</h2>
            <div className='flex flex-col justify-start items-start my-5'>
                <h3 className='text-2xl text-red-900 my-4'>Company</h3>
                <p className='text-xl text-blue-900 max-w-5xl text-justify mb-4'>Informatic Computech Pvt.Ltd. mission is to challenge how organizations engage software 
                technology to create enterprise value. We do so by providing software development, technology consulting
                services that enable organizations to seize market opportunity, empower their people and drive operational efficiency. We represent multitask, Intel, Compaq, IBM, Dell, Microsoft and many others. We not only offer equipment, we offer solutions that grow with your business.we puts the customer first .We also provide SMS Solution and Call Center Solution in our company.All of our services are delivered in a professional and yet highly personal manner. We consider our relationship with you, our client,
                to be far more than just being another supplier of IT.</p>

                <h3 className='text-2xl text-red-900 my-4'>We Value our clients</h3>
                <p className='text-xl text-blue-900 max-w-5xl text-justify mb-4'>Informatic computech Pvt. Ltd. is a company that works in a flexible environment for all procees, adjusting as per our clients requirements. Quality work is a prerequisite for every task we undertake at Informatic computech Pvt. Ltd. as we consider that "every day counts". And why not, we know that good jobs always bring new clients..</p>

                <h3 className='text-2xl text-red-900 my-4'>We believe in Quality</h3>
                <p className='text-xl text-blue-900 max-w-5xl text-justify mb-4'>We always attempting to provide world-class services, we always strive to provide you with quality work and consider "every effort counts". Excellent and consistent quality at low cost is what drives outsourcing business. And we play by the rules of the game.</p>

                <h3 className='text-2xl text-red-900 my-4'>We value our people</h3>
                <p className='text-xl text-blue-900 max-w-5xl text-justify mb-4'>People are the key resources in any service industry. We highly value our people and their performance. Informatic Computech Pvt. Ltd. ensures providing an environment to develop their skills and offers them a rewarding career.</p>
            </div>
        </div>
    )
}

export default AboutUs