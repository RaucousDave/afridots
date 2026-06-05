import React from 'react'
import HeroComp from '../Components/HeroComp'
import Explore from '../Components/Explore'

const Listen = () => {
  return (
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
        </div> 
  )
}

export default Listen