import React from "react";
const NewLBg = "/assets/newsletterbg.png";
import SUbscribe from "./global/Subscribe";

const Newsletter = () => {
  return (
    <div
      className="bg relative 
         overflow-hidden rounded-4xl h-fit flex justify-center items-center flex-col py-10"
    >
      <img
        src={NewLBg}
        alt=""
        className="h-full absolute -z-1 left-1/2 -translate-x-1/2 "
      />
      <h2 className="font-cherry text-4xl text-[#E3A107]">Newsletter</h2>

      <p className="text-center my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem vero
        debitis, delectus, corrupti esse ex ea, omnis sequi vel fuga.
        Consequuntur rerum nulla tempora!
      </p>

      <SUbscribe />
    </div>
  );
};

export default Newsletter;
