import { Link } from "react-router-dom";
import { navlinks } from "../../data/navlinks";
import MobileMenu from "./MobileMenu";
import OrangeBtn from "./OrangeBtn";
import { NavLink } from "react-router-dom";

const Logo = "/assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-3 sm:px-10 md:px-20 md:pt-10 pt-4">
      <Link to={"/"}>
        {" "}
        <img src={Logo} alt="Logo of Afridtots" className="w-[147px]" />
      </Link>

      {/* Desktop Links */}
      <ul className="md:flex md:items-center font-semibold hidden font-cherry gap-4">
        {navlinks.map((nav, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              `text-[24px] ${isActive ? "text-yellow-500" : "text-green-700"}`
            }
            to={`${nav.target}`}
          >
            {nav.name}
          </NavLink>
        ))}

        <OrangeBtn />
      </ul>
      <MobileMenu />
    </div>
  );
};

export default NavBar;
