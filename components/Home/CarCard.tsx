import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaGasPump } from 'react-icons/fa'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { PiSteeringWheelFill } from 'react-icons/pi'


function CarCard(props: any) {
    const [car, setCar] = useState<any>();

    useEffect(()=>{
        if (props.car) {
            setCar(props.car)
        }
    },[props.car])

    return car&&(
        <div className='group bg-white hover:border cursor-pointer duration-300
        border-blue-500 rounded-lg p-5 shadow-md max-w-sm mx-auto mb-12'>
           <h2 className='text-[20px] font-medium mb-2'>{car.name}</h2>
           <h2 className='text-[28px] font-bold mb-2'>
               <span className='text-[12px] font-light'> ₱ </span>
               {car.price}
               <span className='text-[12px] font-light'> /day</span></h2>
           <Image src={car.image?.url} alt={car.name} width={220} height={200}
               className='w-full h-auto mb-5 object-contain' />
           <div className='flex justify-around'>
               <div className='text-center text-gray-500'>
                   <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
                   <h2 className='text-[14px] font-light'>{car.carType}</h2>
               </div>
               <div className='text-center text-gray-500'>
                   <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2' />
                   <h2 className='text-[14px] font-light'>{car.carSeat} Seat</h2>
               </div>
               <div className='text-center text-gray-500'>
                   <FaGasPump className='w-full text-[22px] mb-2' />
                   <h2 className='text-[14px] font-light'>{car.carAvg} MPG</h2>
               </div>
           </div>
           <button className='hidden group-hover:flex bg-gradient-to-r from-blue-400
            to-blue-500 p-2 rounded-lg text-white w-full mt-4 px-5 justify-between items-center'>
               Rent Now
               <span className='ml-2'>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                       <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L18.44 12 12.97 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                   </svg>
               </span>
           </button>
       </div>
    )
}

export default CarCard