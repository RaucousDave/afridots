import Subscribe from "./global/Subscribe";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { BsTwitterX } from "react-icons/bs";

import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Home", target: "/" },
    { name: "About Us", target: "/about" },
    { name: "Shop", target: "/shop" },
    { name: "Events", target: "/" },
  ];

  const socialIcons = [
    { icon: FaFacebook },
    { icon: AiFillInstagram },
    { icon: BsTwitterX },
  ];
  // hover:text-blue-500 hover:border-yellow; hover:bg-white  text-yellow-500
  return (
    <div className="flex flex-col px-3 items-center py-24 bg-[url('/assets/Footer.png')] bg-cover">
      <div className="flex gap-2">
        {/* <img className='text-blue-800' src={Fb} alt="Footer background pattern" /> */}

        {socialIcons.map((social) => {
          const SocialIcon = social.icon;

          return (
            <div key={social.icon.displayName ?? social.icon.name} className="hover:bg-white p-1 border border-transparent transition-all hover:border-yellow-500 rounded-full">
              <SocialIcon className="text-yellow-500 fill-yellow-500 w-7 h-7 transition-colors hover:text-blue" />
            </div>
          );
        })}
        {/* IG */}
      </div>

      {/* Newsletter */}

      <div className="flex flex-col items-center px-4 sm:px-10 md:px-42 text-white">
        <h2 className="font-cherry text-3xl py-6">Newsletter</h2>
        <p className="text-center font-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          rem commodi nulla quas dolor architecto quae suscipit hic. Voluptas
          dolorem esse cum, inventore minima reprehenderit aliquid sunt impedit
          sit pariatur.
        </p>
      </div>
      {/* SUbscribe card */}
      <Subscribe />
      <div className="py-6">
        <h2 className="font-cherry text-3xl text-white ">Sitemap</h2>
      </div>
      <div className="text-[#F6E2B2] flex md:flex-row flex-col gap-5">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            to={link.target}
            className="hover:text-yellow-500 text-center font-body cursor-pointer transition-colors ease-in-out  duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="py-6">
        <h2 className="font-cherry text-3xl  text-white ">Contact Us</h2>
      </div>
      <div className="text-[#F6E2B2] font-body flex md:flex-row items-center flex-col ">
        <p className="opacity-70">+234 5678 9012</p>
        <p>maitama Abuja</p>
      </div>
      <div className="mt-5 font-body bg-[#F6E2B2] text-[16px] px-5 py-1 rounded-full">
        <h4>powered by &copy; {new Date().getFullYear()} Sense Connect</h4>
      </div>
    </div>
  );
};

export default Footer;
