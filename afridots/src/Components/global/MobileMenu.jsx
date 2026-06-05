import { useState } from "react";
import { Link } from "react-router-dom";
import { navlinks } from "../../data/navlinks";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ShoppingBag } from "lucide-react";
import { Menu } from "lucide-react";
const Logo = "/assets/logo.png";

export default function MobileMenu() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="md:hidden flex items-center space-x-4 relative">
      <div className="p-4 rounded-full bg-green-50">
        <ShoppingBag className="text-green-600" />
      </div>
      <Menu
        onClick={() => setCollapsed(false)}
        className="text-yellow-500 font-semibold w-6 h-6"
      />

      {/* Backdrop */}
      <div
        onClick={() => setCollapsed(true)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
            ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      />

      {/* Drawer */}
      <div
        className={`flex flex-col fixed top-0 right-0 h-full w-[80%] rounded-l-4xl bg-white shadow-md z-50 px-8 py-12 gap-8
            transition-transform duration-300 ease-in-out
            ${collapsed ? "translate-x-full" : "translate-x-0"}`}
      >
        <IoMdCloseCircleOutline
          onClick={() => setCollapsed(true)}
          className="mb-12 ml-auto w-6 h-6 sm:h-12 sm:w-12 cursor-pointer"
        />
        <img src={Logo} className="w-full" alt="Afridots logo" />
        {navlinks.map((nav, index) => (
          <Link
            key={index}
            onClick={() => setCollapsed(true)}
            className="text-center font-cherry text-green-700 text-[23px]"
            to={nav.target}
          >
            {nav.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className="mx-auto"
          onClick={() => setCollapsed(true)}
        >
          <button className="font-body text-xl bg-yellow-500 text-white px-8 py-4 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
