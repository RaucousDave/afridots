const HeroImg1 = "/assets/Frame13.png";
const HeroImg2 = "/assets/HeroImg2.png";
const Shield = "/assets/Generative_Object.png";

import BooksGrid from "../Components/Home/BooksGrid";
import AudioGrid from "../Components/Home/AudioGrid";
import LatestUpdate from "../Components/global/LatestUpdate";

const Home = () => {
  return (
    <>
      <>
        <main className="mb-20 relative">
          <section className="flex mt-20 justify-center items-center z-100 flex-col-reverse sm:flex-row sm:px-10 pb-20 md:px-20 gap-10 ">
            <div>
              <img src={HeroImg1} alt="" />
            </div>
            <div>
              <img src={HeroImg2} alt="Two kids with a globe" />
            </div>
          </section>
          <section className="sm:px-10 md:px-20 pt-24">
            <section className=" flex flex-col items-center justify-center py-10 w-full border-[20px] [border-image:url('/assets/Books.png')_30] ">
              <BooksGrid />
            </section>
          </section>

          <AudioGrid />

          {/* Latest Update */}
          <section>
            <LatestUpdate />
          </section>
          {/* Parent */}
          <section className="bg-[#cee2c6] px-6 sm:px-10 md:px-20 md:py-10 md:flex md:flex-row-reverse">
            <div className=" flex justify-center py-6 flex-shrink-0 md:relative md:flex-3">
              <img
                className="h-[257px] md:h-[400px] md:absolute md:-top-30 "
                src={Shield}
                alt="Generative shield"
              />
            </div>
            <div className=" md:flex-5">
              <h2 className="text-2xl font-body">The Platform Trusted by</h2>
              <h1 className="font-cherry text-white text [-webkit-text-stroke:2px_black] text-5xl mt-1 mb-6">
                Parent Globally
              </h1>
              <p className="leading-6 pb-5 font-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident repellendus tempora consequuntur mollitia modi sunt
                unde quae, nam molestiae consectetur. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Placeat perferendis rem illo
                quidem iste officia accusamus illum, quae harum corrupti?
              </p>
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default Home;
