import React from "react";

const Menu = ({ isMobile, selected, setSelected }) => {
  const categories = ["All", "Events", "Literature", "Education"];

  return (
    <>
      {!isMobile && (
        <div className="w-full font-body flex justify-center my-10">
          <div className="flex border-y-2 border-[#C0C0C0] w-4/5 gap-4 justify-center mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`cursor-pointer px-4 py-2 transition ${
                  selected === cat
                    ? "text-[#5E9F43] border-none"
                    : "text-[#E3A107] hover:text-[#5E9F43]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
