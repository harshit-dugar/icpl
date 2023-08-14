import React from 'react'
import {training} from '../../data'

function TrainingCard() {
    return (
        <div className='container flex flex-col items-center justify-start px-5 mx-4'>
            <h2 className='md:text-6xl text-5xl text-indigo-900 font-bold mb-5 border-b-[5px] border-red-900'>Our Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {training.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col items-center p-5'>
                            <img src={item.image} alt={item.title} className='w-32 h-32 object-contain'/>
                            <h3 className='text-2xl font-bold text-indigo-900 pb-2'>{item.title}</h3>
                            <p className='text-gray-700 text-justify pb-4'>{item.description}</p>
                            <p className='text-gray-700'><span className='font-bold text-red-900'>Duration: </span>{item.duration}</p>
                            <p className='text-gray-700'><span className='font-bold text-red-900'>Eligibility: </span>{item.eligibility}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrainingCard