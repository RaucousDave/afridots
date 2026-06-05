import React from 'react'
const Book1 = "/assets/read1.png";

const TrendingBook = () => {
  return (
    <div className='flex gap-5 w-full h-[172px] py-2'>
        <div className='bg-white py-5 px-2 h-full rounded'>
            <img src={Book1} className='h-full' alt="The number 1 car spotter book" />
        </div>
        <div className='flex flex-col justify-center gap-3'>
          <h3>The No. 1 Car Spotter Goes To School</h3>
          <p className='text-[#E3A107]'>NGN 15,000</p>
        </div>
    </div>
  )
} 

export default TrendingBook
