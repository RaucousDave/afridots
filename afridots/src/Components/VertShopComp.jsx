import React from "react"

const VertShopComp = ({
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
      className="border-[20px] h-full w-full p-6 flex flex-col items-center justify-center rounded-2xl gap-10"
      style={{
        borderImage: `url(${borderImage}) 40`,
        borderStyle: "solid",
      }}
    >
      {/* Text Section */}
      <div className="max-w-md flex flex-col gap-3 items-center">
        <h2 className="text-2xl sm:text-3xl  md:text-4xl font-bold mb-2 font-cherry " style={{
            color: `${headingColor}`
        }} >
          {title}
          </h2>
        <p className="text-gray-600 text-center sm:text-left mb-4">{text}</p>
        <button
          style={{ backgroundColor: buttonColor }}
          className="text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-6 md:mt-0">
        <img src={image} alt={title} className="h-40 md:h-48 object-contain" />
      </div>
    </div>
  )
}

export default VertShopComp





// import React from 'react'
// import Headphones from '/assets/plugs.png'

// const VertShopComp = () => {
//   return (

//     <div className='border-[20px] w-full [border-image:url("/assets/shop/orangeBI.png")_30]'>
//       <div>
//         <h2>Page by Page</h2>
//         <p>Lorem ipsum dolor sit amet.</p>
//         <button>Btn text</button>
//       </div>
//       <div>
//         <img src={Headphones} alt="" />
//       </div>

//     </div>
//   )
// }

// export default VertShopComp
