import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../data/newsCards";

const NewsCard = ({ filter, excludeId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  // filter first
  let filteredCards =
    filter === "All" ? cards : cards.filter((card) => card.tag === filter);

  if (excludeId) {
    filteredCards = filteredCards.filter((c) => c.id !== excludeId);
  }

  // calculate pagination
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCards.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const tagColors = {
    Events: "bg-[#5E9F43]",
    Literature: "bg-[#E3A107]",
    Education: "bg-[#09230F]",
    Default: "bg-gray-500",
  };

  return (
    <div>
      {/* Cards */}
      {currentItems.map((card) => (
        <div
          key={card.id}
          onClick={() => navigate(`/news/${card.id}`)}
          className="cursor-pointer font-body rounded-lg w-full gap-5 flex flex-col md:flex-row mb-8 hover:shadow-lg transition"
        >
          <div className="md:flex-3 overflow-hidden rounded-2xl md:h-72">
            <img
              src={card.img}
              alt={card.title}
              className="w-full md:w-[448px] object-contain"
            />
          </div>

          <div className="flex-5">
            <div
              className={`${tagColors[card.tag] || tagColors.Default} font-bold text-white w-fit px-3 py-1`}
            >
              <p className="text-sm">{card.tag}</p>
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-6">{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 font-body py-1 rounded-md transition ${
                currentPage === page
                  ? "bg-[#E3A107] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsCard;
