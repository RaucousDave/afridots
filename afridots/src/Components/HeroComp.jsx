import React from 'react'

const HeroComp = ({
  title = "Books",
  backgroundImage,
  titleColor = "#5F4403",
  buttonColor = "#E3A107",
  borderColor = "#E3A107",
  placeholder = "Search...",
  onSearch, 
}) => {
  return (
    <div>
      <div className='relative h-fit py-20 px-10'>
        {/* Dynamic background image */}
        {backgroundImage && (
          <img
            src={backgroundImage}
            className='absolute -z-5 top-0 left-0 h-full w-full '
            alt="Hero background"
          />
        )}

        <div className='z-10 flex flex-col items-center gap-10 justify-center h-full pb-16'>
          {/* Dynamic title */}
          <h2 className='font-cherry text-6xl' style={{ color: titleColor }}>
            {title}
          </h2>

          {/* Search input and button */}
          <div className='w-[80%] flex flex-col items-center gap-10 md:flex-row md:gap-6'>
            <input
              type="search"
              className='w-full border-2 rounded-full h-10 px-12 outline-none'
              style={{ borderColor }}
              placeholder={placeholder}
            />
            <button
              className='h-10 w-fit px-[2rem] text-white font-bold rounded-full cursor-pointer '
              style={{ backgroundColor: buttonColor }}
              onClick={onSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComp
