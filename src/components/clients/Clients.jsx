import React from 'react'
import { clients } from '../../clients'

function Clients() {
    return (
        <div className='flex flex-col items-center md:justify-between px-5 mx-4 text-indigo-900 mb-5'>
            <h2 className='md:text-6xl text-5xl font-bold mb-5 border-b-[5px] border-red-900'>Our Clients</h2>
            <div className='grid sm:grid-cols-3 grid-cols-2 gap-3 justify-center items-center my-10'>
                {clients.map((client) => (
                    <div key={client.id} className=''>
                        <img src={client.image} alt={client.id} className='h-20 md:h-40 m-4 sm:mx-16 mx-5' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients