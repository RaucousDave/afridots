import { Link } from "react-router-dom";

const OrangeBtn = () => {
  return (
    <Link to={"/contact"}>
      <button className="bg-yellow-500 cursor-pointer px-6 py-4 flex items-center text-[16px] justify-center rounded-full font-body text-white ">
        Contact us
      </button>
    </Link>
  );
};

export default OrangeBtn;
