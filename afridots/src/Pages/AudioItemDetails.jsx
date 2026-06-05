import React from 'react'
import { useParams } from 'react-router-dom'
import audioData from "../data/audioData";
import Trending from "../Components/Trending"
import {audioMenu} from "../data/menu"
import CategoryMenu from '../Components/CategoryMenu';

const AudioItemDetails = () => {
  const { id } = useParams();
  const item = audioData.find(i => i.id === id)


  if (!item) {
    return <p className="text-center mt-20">Item not found</p>;
  }
  return (
    <div className=' mb-20 px-4 sm:px-10 md:px-20 mt-20 '>
      <CategoryMenu menu={audioMenu} basePath='/audio' />
      <div className='md:flex mb-18'>
        <div className='flex-1'>
          <div className=' px-50 py-20 rounded-2xl bg-[#f7f6f6]'>
            <img src={item.img || item.cover} className="w-full" alt={item.title} />
          </div>


          <div className='flex  mt-10 justify-between  '>
            <div className=' px-14 py-8  rounded-2xl bg-[#f7f6f6]'>
              <img src={item.img || item.cover} className="w-full" alt={item.title} />

            </div>
            <div className=' px-14 py-8  rounded-2xl bg-[#f7f6f6]'>
              <img src={item.img || item.cover} className="w-full" alt={item.title} />

            </div>
            <div className=' px-14 py-8  rounded-2xl bg-[#f7f6f6]'>
              <img src={item.img || item.cover} className="w-full" alt={item.title} />

            </div>
          </div>
        </div>


        <div className='py-20 md:py-0 md:px-8 flex-1'>
          <h2 className='font-bold text-4xl leading-2 '>{item.title}</h2>
          <h3 className='text-2xl mt-10 text-[#E3A107] my-4 font-bold'>NGN {item.cost}</h3>
          <p className='text-lg leading-9'>{item.description}</p>
          <div className='mt-10 flex gap-2'>
            <button className='hover:text-white border-2 border-[#a1a1a1] hover:border-[#e3a107] text-[#a1a1a1] transition-colors ease-in duration-500 cursor-pointer font-bold py-3 px-4 rounded-full hover:bg-[#e3a107] w-30'>Purchase</button>
            <button className='text-white hover:font-extrabold font-bold py-3 px-4 rounded-full w-30 hover:bg-[#e3a107c5] transition-all ease-in duration-500  bg-[#e3a107]'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div>
        <Trending />
      </div>
    </div>
  )
}

export default AudioItemDetails