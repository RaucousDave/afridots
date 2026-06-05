import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

import { Eye, Heart } from "lucide-react";
import { cards } from "../data/newsCards";
import { useWindowWidth } from "./hooks/useWindowWidth";
import Menu from "./Menu";
import UpdateComp from "./global/LatestUpdate";
import Newsletter from "./Newsletter";

const NewsDetail = () => {
  const socialIcons = [
    { id: 1, icon: FaFacebook },
    { id: 2, icon: IoLogoInstagram },
    { id: 3, icon: BsTwitterX },
    { id: 4, icon: FaLinkedin },
  ];
  const { id } = useParams();
  const card = cards.find((c) => c.id === Number(id));
  const width = useWindowWidth();
  const isMobile = width < 768;
  const navigate = useNavigate();
  // Default menu selection to card's tag
  const [selected, setSelected] = useState(card?.tag || "All");

  if (!card) return <p>News not found.</p>;

  return (
    <>
      <section className="px-4 font-body sm:px-10 md:px-20 py-8">
        {/* Back button */}
        <Link to="/news" className="text-[#5E9F43] mb-6 inline-block">
          ← Back to News
        </Link>

        {/* Reusable Menu */}
        <Menu
          isMobile={isMobile}
          selected={selected}
          setSelected={(cat) => {
            setSelected(cat);
            navigate(`/news?category=${cat}`);
          }}
        />

        {/* Detail content */}
        <div className="w-full flex justify-center">
          <div className="w-4/5">
            <div className="rounded-lg flex flex-col  gap-6">
              <h1 className="text-[32px] sm:text-5xl md:text-6xl font-cherry text-center font-bold mt-4">
                {card.title}
              </h1>

              <div className="flex items-center py-1 justify-between border-y border-[#C0C0C0]">
                {/* Add author dynamically */}
                <h3 className="text-[#5E9F43] flex-1 ">Jennifer Brown</h3>
                <div className="flex flex-2 justify-between sm:flex-none sm:gap-2">
                  <div className="w-full flex justify-center ">
                    <p className="text-sm font-bold text-white bg-[#5E9F43] w-fit px-3 py-1">
                      {card.tag}
                    </p>
                  </div>
                  <p className="whitespace-nowrap"> 24th July, 2025</p>
                </div>
              </div>

              <div className="">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full rounded-2xl object-cover"
                />
              </div>

              <div>
                <p className="mt-4">{card.details}</p>
              </div>
              <div className="flex mt-6 justify-between items-center">
                <div className="flex gap-3 text-yellow-500">
                  <Heart />
                  <Eye />
                </div>
                <div className="">
                  <h3 className="text-green-700">Share</h3>
                  <div className="flex mt-3 gap-3">
                    {socialIcons.map((social) => {
                      const Icon = social.icon;
                      return <Icon className="fill-yellow-500 w-6 h-6" />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 mt-8 mx-auto ">
          <Newsletter />
        </div>
      </section>
      <div>
        <UpdateComp />
      </div>
    </>
  );
};

export default NewsDetail;
