import React from 'react'
const Plug = "/assets/plugs.png";
const OrangeBorder = "/assets/shop/orangeBI.png";
const Colr1 = "/assets/shop/col1BI.png";
const Colr2 = "/assets/shop/col2BI.png";
const Colr4 = "/assets/shop/col4BI.png";
const Bk = "/assets/shop/bookimg.png";
const Lego = "/assets/shop/lego.png";
const Hdphn1 = "/assets/shop/HeadPhone1.png";
const BP = "/assets/shop/bagpack.png";
const shop = "/assets/shop/shopcloth.png";
const SHKt = "/assets/shop/superherokt.png";
const TrendingImg = "/assets/newsletterbg.png";

import VertShopComp from '../Components/VertShopComp'
import HorShopComp from '../Components/HorShopComp'
import Trending from '../Components/Trending'
import Explore from '../Components/Explore'

const Shop = () => {
    return (
        <>
            <section className='px-4 sm:px-10 md:px-20 py-20'>
                <div className='bg-[#EBEBEB] border-[20px] [border-image:url("/assets/shopHeadBi.png")_30] rounded-2xl flex flex-col items-center gap-6 sm:gap-0 sm:flex-row md:pl-8 pt-10 sm:pt-0 '>
                    <div className='flex-5 flex flex-col items-center md:items-start justify-center'>
                        <h3 className='text-[#5E9F43] text-2xl sm:text-4xl md:text-6xl'>The AfriDTots</h3>
                        <h2 className='font-cherry text-4xl sm:text-5xl text-[#345725] md:text-7xl py-2 '>COLLECTION</h2>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi.</p>
                        <button className='mt-8 sm:mt-2 md:mt-6 bg-[#56913D] rounded-4xl px-5 py-2 text-white cursor-pointer font-bold text-sm '>Explore</button>
                    </div>
                    <div className='w-[240px]  sm:flex-4'>
                        <img src={Plug} alt="" className='w-full' />
                    </div>
                </div>

            </section>


            <section className='px-4 sm:px-10 md:px-20'>

                {/* Top row */}
                <div className='flex justify-between gap-10 flex-col md:flex-row'>
                    <div className='flex-1'>
                        <VertShopComp
                            borderImage={OrangeBorder}
                            buttonColor="#E3A107"
                            image={Bk}
                            title="Page by Page"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            buttonText="Explore Our Books"
                            headingColor="#E3A107"

                        />
                    </div>
                    <div className='flex-1'>
                        <VertShopComp
                            borderImage={Colr1}
                            buttonColor="#56913D"
                            image={Lego}
                            title="Play All Day"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            buttonText="Pick a Toy"
                            headingColor="#5E9F43"

                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className='border-[20px] [border-image:url("/assets/shop/col2BI.png")_30] rounded-2xl flex items-center gap-6 sm:gap-10 flex-col-reverse sm:flex-row md:pl-8 pt-10 sm:pt-0 mt-10'>

                    {/* Left */}
                    <div className='w-[240px]  sm:flex-3'>
                        <img src={Hdphn1} alt="" className='w-full' />
                    </div>

                    {/* Right */}
                    <div className='flex-5 flex flex-col items-center md:items-start justify-center'>
                        <h3 className='text-[#333333] text-2xl sm:text-4xl md:text-6xl font-cherry'>The AfriDTots</h3>

                        <p className=' text-center sm:text-left py-2 text-[#767676] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi.</p>
                        <button className='mt-8 sm:mt-2 md:mt-6 bg-[#56913D] rounded-4xl px-5 py-2 text-white cursor-pointer font-bold text-sm '>Listen to Stories</button>
                    </div>
                </div>

                {/* Third Row */}

                <div className='flex flex-col sm:flex-row mt-10 gap-10'>
                    <div className='flex flex-col gap-10 flex-5'>
                        <div>
                            <HorShopComp
                                borderImage={Colr4}
                                buttonColor="#56913D"
                                image={BP}
                                title="Play All Day"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                buttonText="Curate Yours"
                                headingColor="#5E9F43"
                            />


                        </div>
                        <div>
                            <HorShopComp
                                borderImage={Colr2}
                                buttonColor="#56913D"
                                image={SHKt}
                                title="Play All Day"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                buttonText="Explore the Adventure"
                                headingColor="#5E9F43"
                            />
                        </div>
                    </div>
                    <div className='flex-3'>
                        <VertShopComp
                            borderImage={OrangeBorder}
                            buttonColor="#E3A107"
                            image={shop}
                            title="Amazing Wardrobe"
                            text="Explore our kids wardrobe collections"
                            buttonText="Look Amazing"
                            headingColor="#E3A107"

                        />
                    </div>
                </div>



            </section>

            {/* Trending Section */}
            <div className='overflow-hidden relative h-fit w-full py-20 my-12'>
                {/* Setup component to recieve price and the others dynamically */}
                <img src={TrendingImg} className='absolute -top-10 left-0 border -bottom-2 h-[120%] -z-10' alt="stripped background" />

                <div className='z-10 px-4 sm:px-10 md:px-20'>
                    <Trending />
                </div>

            </div>
            {/* Explore Image */}
            <div className='my-5 px-4 sm:px-10 md:px-20'>

                <Explore />


            </div>
        </>
    )
}

export default Shop
