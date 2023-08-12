import React from 'react'
import { clients } from '../../clients'

function Clients() {
    return (
        <div className='flex flex-col items-center md:justify-between px-5 mx-4 text-indigo-900'>
            <h2 className='md:text-8xl text-5xl font-bold mb-5 border-b-[5px] border-red-900'>Our Clients</h2>
            <div className='grid sm:grid-cols-3 grid-cols-2 justify-center items-center my-5'>
                {clients.map((client) => (
                    <div key={client.id} className=''>
                        <img src={client.image} alt={client.id} className='h-20 md:h-40 p-2 sm:mx-16 mx-5' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients