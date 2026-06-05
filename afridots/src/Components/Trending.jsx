import React from 'react'
const Star = "/assets/Star4.png";
const Song1 = "/assets/audio/Vid.mp3";
import SoundComp from '../Components/SoundComp'
import TrendingBook from './TrendingBook'

const Trending = () => {
  return (
    <div className=' box-border '>

      <div className='bg-[#E3A107] flex  gap-5 font-cherry pl-10 items-center rounded-t-2xl rounded-b-sm mb-10 py-2'>

        <img src={Star} className='h-full' alt="" />
        <h3 className='text-[30px] '>Trending</h3>
      </div>
      <div className='flex'>
 
        {/* audio */}
        <div className=' flex flex-col sm:flex-row gap-5 overflow-x-scroll py-10'>
          <div className='border border-[#8E9A91] rounded-lg px-5 sm:min-w-[351px] py-3'>
            <SoundComp
              audioSrc={Song1}
              title="African (My Africa)"
              description=""
              waveColor="#ffffff"
              progressColor="#f59e0b"
              buttonColor="#e11d48"
            />

        
          </div >
          <div className='border border-[#8E9A91] rounded-lg px-5 sm:min-w-[351px] py-3'>
            <TrendingBook />
          </div>
          <div className='border border-[#8E9A91] rounded-lg px-5 sm:min-w-[351px] py-3'>
            <SoundComp
              audioSrc={Song1}
              title="African (My Africa)"
              description=""
              waveColor="#ffffff"
              progressColor="#f59e0b"
              buttonColor="#e11d48"
            />
          </div >
          <div className='border border-[#8E9A91] rounded-lg px-5 sm:min-w-[351px] py-3'>
            <TrendingBook />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
