import React from 'react'
const ExploreLg = "/assets/explore.png";
const ExploreSm = "/assets/exploreMoreSm.png";
const Explore = () => {
  return (
    <div>
        <div className='sm:hidden w-full px-2'>
                    <img src={ExploreSm} className='w-full' alt="" />
                </div>
                <div className='hidden sm:block w-full'>
                    <img src={ExploreLg} className='w-full' alt="" />
                </div>
    </div>
  )
}

export default Explore
