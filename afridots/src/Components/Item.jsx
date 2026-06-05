
import React from 'react'
import BookItem from './Grid/BookItem'
import BookImg from "/assets/books/carSpotter.png'

const Item = () => {
  return (
    
    <div className=' w-full font-sherif '>
    <div className='md:flex grid px-30 leading-8 py-10 justify-center items-center'>
        <div className=' bg-gray-200  flex justify-center item-center rounded-4xl p-35'>
            <img className='w-100' src={BookImg} alt="" />
        </div>
        <div className='p-5'>
            <h1 className='text-4xl font-bold'>The No.1 car spotter goes to school</h1>
            <div className='flex my-5 w-30 text-gray-400 font-bold  h-10 justify-center items-center rounded-2xl   border'>
                <div className='border-r-2  px-3'>-</div>
                <div className='px-3'>1</div>
                <div className='border-l-2 px-3'>+</div>
            </div>
            <div className='text-amber-500  font-bold text-3xl'>NGN 15,000</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta doloribus maxime quas repellendus, tempore cumque consequuntur in totam dolor error, neque sed reiciendis possimus molestias dolorem vel officiis eos obcaecati itaque quaerat est quos! Veritatis quae sint eos provident!</div>

        <div>
            <ul className='list-disc  px-5'>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor </li>
            </ul>
        </div>

            <div className='flex w-70 my-5 justify-between  '>
                <button className='px-4 py-2 border font-bold text-lg  text-gray-400  rounded-full'>Purchase</button>
                <button className='px-4 py-2 border bg-[#E3A107] font-bold text-lg text-white rounded-full'>Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Item