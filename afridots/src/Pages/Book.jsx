import React from 'react'
import HeroComp from '../Components/HeroComp'
import Explore from '../Components/Explore'
const Plugs = "/assets/shop/HeadPhone1.png";
const BookHeroBg = "/assets/bookHeroBg.png";
const BookBg = "/assets/BookBg.png";
import ItemFilterComp from "../Components/ItemFilterComp";

import SharedGrid from "../Components/Grid/SharedGrid";
import TrendingBook from '../Components/Trending'
import BookItem from "../Components/Grid/BookItem";
import booksData from "../data/booksData"
import {bookMenu} from "../data/menu"



const Book = () => {
  


  return (
    <>
      <div className='mb-20 px-4 sm:px-10 md:px-20 mt-20'>

        <div >
          <HeroComp
            title="Books"
            backgroundImage={BookHeroBg}
            titleColor="#5F4403"
            buttonColor="#E3A107"
            borderColor="#E3A107"
            placeholder="Book Title..."
            onSearch={() => console.log("Book search clicked")}
          />


        </div>

        <div className='my-10'>
          <Explore />
        </div>

        <section>
          <ItemFilterComp
            data={booksData}
            menu={bookMenu}
            RenderComponent={(props) => <SharedGrid {...props}  ItemComponent={BookItem} />}
          />

        </section>
      </div>

      <section className='h-fit my-5'>
        <div
          className=" md:h-60 mb-28 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BookBg})` }}
        >
          <div className="flex flex-col md:flex-row md:justify-center gap-8 relative h-full px-4  ">
            <div className="     h-full py-10 text-[#767676]">
              <h4 className=" text-[1.8rem]  text-nowrap">Listen to awesome</h4>
              <h1 className="text-[#E3A107]  font-cherry text-nowrap text-[2.7rem] font-bold [-webkit-text-stroke:2px_black]">
                African Stories
              </h1>
              <button className='border-2 mt-4 font-bold rounded-full p-2 flex '>Listen to Stories</button>
            </div>

            <div className=" h-[160%] flex -translate-y-[20%] my-5 ">
              <img src={Plugs} className="h-full -top-8" alt="" />
            </div>
          </div>
        </div>
        <div className='mb-20 px-4 sm:px-10 md:px-20 mt-20'>
          <TrendingBook />
        </div>
      </section>



    </>
  )
}

export default Book
