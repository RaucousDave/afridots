import React from "react";

const ProductItem = ({ data }) => (
  <div className="p-8 border border-[#B3BBB5] shadow-sm rounded-lg hover:shadow-md transition flex flex-col gap-4">
    <div className="bg-[#EFF5EC] w-full rounded-xl">
      <img src={data.img} className="w-full" alt={data.title} />
    </div>

    <h3 className="text-xl font-semibold">{data.title}</h3>
    <p className="text-[#E3A107] pb-1 font-bold">NGN {data.cost}</p>
    
    {/* <div className="w-[75%]">
      <div className="text-right">
        <button className="border-2 border-[#E3A107] rounded-full px-6 py-1">
          Add to Cart
        </button>
      </div> */}

    {/* 
      <p className="text-gray-500 text-sm">{data.description}</p>
      <p className="text-[#E3A107] py-1 font-bold">NGN {data.cost}</p> 
      
    </div>
      */}

  </div>
);

export default ProductItem;
