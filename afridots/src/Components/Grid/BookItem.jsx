import React from "react";
import { useNavigate } from "react-router-dom"

const BookItem = ({ data, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/item/${id}`, { state: { item: data, parentType : "books" } })}
      className="p-8 border cursor-pointer border-[#B3BBB5] shadow-sm rounded-lg hover:shadow-md transition flex gap-4">
      <div className="bg-[#EFF5EC] w-[25%] rounded-xl">
        <img src={data.img} className="w-full" alt={data.title} />
      </div>

      <div className="w-[75%]">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <p className="text-gray-500 text-sm">{data.description}</p>
        <p className="text-[#E3A107] py-1 font-bold">NGN {data.cost}</p>

        <div className="text-right">
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("add to cart");
            }}
            className="border-2 border-[#E3A107] rounded-full px-6 py-1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
