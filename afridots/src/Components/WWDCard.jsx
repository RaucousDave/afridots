
import React from 'react'
const NumBg = "/assets/numBg.png";

const WWDCard = ({ number, title, description, buttonText }) => {
  return (
    <div className='border-[25px] [border-image:url("/assets/cardBorder.png")_30] flex flex-col items-center justify-between max-w-[359px] h-[439px] p-4'>
      <div className='relative w-fit h-fit'>
        <img src={NumBg} alt="number background" />
        <h2 className='text-transparent [-webkit-text-stroke:2px_black] font-cherry absolute top-1/3 text-8xl -translate-x-1/2 -translate-y-1/2 left-1/2'>
          {number}
        </h2>
      </div>
      <h3 className='text-3xl text-[#E3A107] font-cherry'>{title}</h3>
      <p className='text-center'>{description}</p>
      <div>
        <button className='border-2 rounded-full border-[#E3A107] text-[#E3A107] px-3 py-1'>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default WWDCard
