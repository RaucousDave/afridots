import React from 'react'

const HorShopComp = ({
    borderImage,
    buttonColor = "#E3A107",
    image,
    title,
    text,
    buttonText,
    headingColor,
  }) => {
    return (
      <div
        className="border-[20px] w-full p-6 flex flex-col sm:flex-row items-center justify-between rounded-2xl gap-10"
        style={{
          borderImage: `url(${borderImage}) 40`,
          borderStyle: "solid",
        }}
      >
        {/* Text Section */}
        <div className="max-w-md flex flex-col gap-3 items-center sm:items-left ">
          <h2 className="text-2xl sm:text-3xl  md:text-4xl font-bold mb-2 font-cherry  " style={{
              color: `${headingColor}`
          }} >
            {title}
            </h2>
          <p className="text-gray-600 text-center sm:text-left mb-4">{text}</p>
          <button
            style={{ backgroundColor: buttonColor }}
            className="text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition w-fit whitespace-nowrap"
          >
            {buttonText}
          </button>
        </div>
  
        {/* Image Section */}
        <div className="mt-6 md:mt-0">
          <img src={image} alt={title} className="h-40 md:h-58 object-contain" />
        </div>
      </div>
    )
  }

export default HorShopComp