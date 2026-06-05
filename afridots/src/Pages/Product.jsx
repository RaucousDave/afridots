import React from 'react'
import HeroComp from '../Components/HeroComp'
import Explore from '../Components/Explore'
const BookHeroBg = "/assets/bookHeroBg.png";
const Avi = "/assets/product/avi.png";
const ProdBg = "/assets/product/bg.png";
import ItemFilterComp from "../Components/ItemFilterComp";
import SharedGrid from "../Components/Grid/SharedGrid";
import TrendingBook from '../Components/Trending'
import ProductItem from '../Components/Grid/ProductItem'
import {productMenu} from "../data/menu"
import productData from "../data/productData"



 

const Product = () => {
  


  return (
    <>
      <div className='mb-20 px-4 sm:px-10 md:px-20 mt-20'>

        <div >
          <HeroComp
            title="Product Merch"
            backgroundImage={BookHeroBg}
            titleColor="#E91D15"
            buttonColor="#D41A13"
            borderColor="#F59793"
            placeholder="Product Title..."
            onSearch={() => console.log("Product search clicked")}
          />


        </div>

        <div className='my-10'>
          <Explore />
        </div>

        <section>
          <ItemFilterComp
            data={productData}
            menu={productMenu}
            RenderComponent={(props) => <SharedGrid {...props} ItemComponent={ProductItem} />}
          />

        </section>
      </div>

      <section className='h-fit my-5'>
        <div
          className=" md:h-60 mb-28 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ProdBg})` }}
        >
          <div className="flex flex-col md:flex-row md:justify-center gap-8 relative h-full px-4  ">
            <div className="     h-full py-10 text-[#767676]">
              <h4 className=" text-[1.8rem]  text-nowrap">For All Our</h4>
              <h1 className="text-[#E3A107]  font-cherry text-nowrap text-[2.7rem] font-bold [-webkit-text-stroke:2px_black]">
                Super Heroes Kit
              </h1>
              <button className='border-2 mt-4 font-bold rounded-full p-2 flex '>Explore Our Books</button>
            </div>

            <div className=" h-[160%] flex -translate-y-[20%] my-5 ">
              <img src={Avi} className="h-full -top-8" alt="" />
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

export default Product
