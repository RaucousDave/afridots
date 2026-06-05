import { useNavigate } from "react-router-dom";

const CategoryMenu = ({ menu, basePath }) => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`${basePath}?category=${category}`);
  };

  return (
    <div className="flex flex-wrap w-full py-2 border-l-0 border-2 border-r-0 border-y-[#c0c0c071] justify-center gap-8 text-lg font-semibold">
      {Object.keys(menu).map((main) => (
        <div key={main} className="relative group">
          <button className="hover:text-[#010101] text-[#E3A107] transition">
            {main}
          </button>

          {/* Submenu */}
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-3 min-w-[180px] z-20">
            {menu[main].map((sub) => (
              <p
                key={sub}
                onClick={() => handleNavigate(sub)}
                className="cursor-pointer px-3 py-1 rounded-md hover:bg-yellow-100"
              >
                {sub}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
