import React from "react";
import { Link } from "react-router-dom";
import Update from "../Update";
const Star = "/assets/Star.png";
const Update1 = "/assets/update1.png";
const UpdateBg = "/assets/LatestUpdate.png";

const LatestUpdate = () => {
  const updates = [
    {
      image: Update1,
      category: "Events",
      title: "Tech Conference 2025",
      description:
        "Join us for an amazing event filled with innovation, networking, and growth opportunities.",
    },
    {
      image: Update1,
      category: "News",
      title: "Afridots Expands to New Regions",
      description:
        "Afridots is now live in more African countries, empowering developers across the continent.",
    },
  ];

  return (
    <div>
      <section
        className=" bg-cover mt-20 py-16 px-6 sm:px-10 md:px-20 bg-center"
        style={{ backgroundImage: `url(${UpdateBg})` }}
      >
        <div>
          <img className="w-[80px] " src={Star} alt="" />
        </div>
        <div>
          <h2 className="font-cherry text-4xl my-5">Latest Update</h2>
          <p className="font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati enim, nihil nulla, est vel dolorum deserunt commodi a
            nostrum architecto illo? Dolore cumque sequi ullam delectus
            similique id. Autem?
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-5  justify-center items-center lg:justify-between mt-6">
          {updates.map((item, index) => (
            <div key={index}>
              <Update
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="w-full mt-12">
          <Link
            to="/news"
            className="bg-[#56913D] font-body text-center flex justify-center items-center w-[166px] h-[56px] rounded-4xl mx-auto text-white font-bold "
          >
            More Updates
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LatestUpdate;
