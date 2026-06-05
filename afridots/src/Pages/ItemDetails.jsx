import { useLocation } from "react-router-dom";
import { useState } from "react";
import CategoryMenu from "../Components/CategoryMenu";
import { bookMenu, productMenu } from "../data/menu";
import Trending from "../Components/Trending"



const ItemDetails = () => {
  const [qty, setQty] = useState(1);
  const { state } = useLocation();
  const item = state?.item;
  const type = state?.parentType;

  const menu =
    type === "books"
      ? bookMenu
      : type === "products"
        ? productMenu
        : null;



  if (!item) {
    return <p className="text-center mt-20">Item not found</p>;
  }

  return (
    <div className="px-4 sm:px-10 md:px-20 mt-20 max-w-6xl mx-auto">

      {menu && (
        <CategoryMenu menu={menu} basePath={`/${type}`} />
      )}

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-[#EFF5EC] p-6 rounded-xl">
          <img src={item.img || item.cover} className="w-full" alt={item.title} />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-600 mb-4">{item.description || item.narrator}</p>

          <p className="text-[#E3A107] text-2xl font-bold mb-6">
            NGN {item.cost || item.price}
          </p>


          {/* Buttons */}
          <div className="flex gap-4">
            <button className="border-2 border-[#E3A107] px-6 py-2 rounded-full">
              Add to Cart
            </button>

            <button className="bg-[#E3A107] text-white px-6 py-2 rounded-full">
              Purchase Now
            </button>
          </div>
        </div>
      </div>

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


          {/* Quantity Selector */}
          <div className="flex border mt-8 items-center  mb-">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-full border text-xl"
            >
              −
            </button>

            <span className="text-xl font-bold">{qty}</span>

            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-10 rounded-full border text-xl"
            >
              +
            </button>
          </div>

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
  );
};

export default ItemDetails;
