import { Link } from "react-router-dom";
const Kellog = "/assets/Vector.png";
const Gplus = "/assets/Vector(1).png";

import SoundComp from "../../Components/SoundComp";

export default function AudioGrid() {
  return (
    <section className="flex gap-20 font-body md:gap-4 sm:px-10 md:px-20 pt-16 md:flex-row flex-col  ">
      <div className="flex-5 h-fit py-16 px-2 border-[20px] [border-image:url('/assets/Audio.png')_30]">
        <div className="border border-[#b3bbb5] p-7 rounded-2xl">
          <SoundComp />
        </div>
        <div className="border border-[#b3bbb5] p-7 rounded-2xl mt-6">
          <SoundComp />
        </div>
        <div className="mt-5 flex justify-end">
          <Link
            to="/books"
            className="bg-[#56913D] text-center flex justify-center items-center w-[166px] h-[56px] rounded-4xl text-white font-bold "
          >
            More stories
          </Link>
        </div>
      </div>
      <div className="border-[20px] flex-2 [border-image:url('/assets/Frame311.png')_30] py-16  px-4 sm:px-20 md:flex md:flex-col md:justify-between">
        <div className="flex justify-between">
          <img className="h-[40px]" src={Kellog} alt="kellog's logo" />
          <img src={Gplus} alt="G plus's logo" />
        </div>

        <div>
          <h2 className="my-10  font-bold">Africa (My Africa) </h2>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque
            unde maiores pariatur asperiores nemo! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Totam, temporibus. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptatem magnam odio
            exercitationem nam ab minus ad esse iusto officiis eligendi.
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="bg-red-600 px-8 py-4 rounded-full text-white font-bold ">
            Sponsor/Partner
          </button>
        </div>
      </div>
    </section>
  );
}
