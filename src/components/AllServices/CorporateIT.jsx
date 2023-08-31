import React from 'react'
import supplies from '../../assets/Images/supplies.jpeg'

function CorporateIT() {
    return (
        <div className='flex flex-col items-center md:justify-between mx-4 text-indigo-900'>
            <h3 className='md:text-xl text-lg font-bold mb-5 border-b-[2px] border-red-900'>IT Supplies</h3>
            <div className='flex sm:flex-row flex-col'>
                <div mx-5>
                    <p className='text-lg'>We provide with latest technology with best prices of laptops,Desktop and Printers, For Bulk supply or DGSND please contact personaly.:</p>
                    <ul className='list-disc ml-10 text-lg'>
                        <li>Apple</li>
                        <li>HP</li>
                        <li>Dell</li>
                        <li>Lenovo</li>
                        <li>Canon</li>
                    </ul>
                </div>
                <div>
                    <img className='mix-blend-darken' src={supplies} alt='Supplies' />
                </div>
            </div>
        </div>
    )
}

export default CorporateIT