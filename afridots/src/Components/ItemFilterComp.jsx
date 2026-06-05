import React, { useState, useEffect } from "react";

const ItemFilterComp = ({ data, menu, RenderComponent }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [sortedData, setSortedData] = useState(data);
  const [sortOption, setSortOption] = useState("Relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // === FILTER HANDLER ===
  const handleSelect = (filter) => {
    setSelectedCategory(filter);
    const filtered = data.filter((item) =>
      item.category.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // === SORT HANDLER ===
  const handleSort = (option) => {
    setSortOption(option);
  };

  // === APPLY SORTING ===
  useEffect(() => {
    let sorted = [...filteredData];

    switch (sortOption) {
      case "A-Z":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Low to High":
        sorted.sort(
          (a, b) =>
            parseFloat(a.cost.replace(/,/g, "")) -
            parseFloat(b.cost.replace(/,/g, "")),
        );
        break;
      case "High to Low":
        sorted.sort(
          (a, b) =>
            parseFloat(b.cost.replace(/,/g, "")) -
            parseFloat(a.cost.replace(/,/g, "")),
        );
        break;
      default:
        sorted = [...filteredData]; // Relevance
        break;
    }

    setSortedData(sorted);
  }, [sortOption, filteredData]);

  // === PAGINATION ===
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center gap-8 py-10 w-full">
      {/* ===== MENU BAR ===== */}
      <div className="flex flex-wrap  w-full py-2  border-l-0 border-2 border-r-0 border-y-[#c0c0c071] justify-center gap-8 text-lg font-semibold">
        {Object.keys(menu).map((main) => (
          <div key={main} className="relative group">
            <button className="hover:text-[#010101] text-[#E3A107] transition">
              {main}
            </button>

            {/* Submenu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg  p-3 min-w-[180px] z-20">
              {menu[main].map((item) => (
                <p
                  key={item}
                  onClick={() => handleSelect(item)}
                  className="cursor-pointer px-3 py-1 rounded-md hover:bg-yellow-100"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ===== RESULTS INFO + SORT ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl text-gray-700 font-medium px-2 sm:px-0">
        <div>
          {selectedCategory ? (
            <p>
              Showing {indexOfFirst + 1} -{" "}
              {indexOfLast > sortedData.length
                ? sortedData.length
              : indexOfLast}{" "}
              of {sortedData.length} results for{" "}
              <span className="font-bold text-[#E3A107]">
                {selectedCategory}
              </span>
            </p>
          ) : (
            <p>Showing all {data.length} results</p>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="mt-3 sm:mt-0">
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 text-gray-700 cursor-pointer outline-none focus:ring-2 focus:ring-[#E3A107] transition"
          >
            <option value="Relevance">Sort by: Relevance</option>
            <option value="A-Z">A - Z</option>
            <option value="Low to High">Low to High Price</option>
            <option value="High to Low">High to Low Price</option>
          </select>
        </div>
      </div>

      {/* ===== DYNAMIC RENDER COMPONENT ===== */}
      <RenderComponent items={currentItems} />

      {/* ===== PAGINATION ===== */}
      <div className="flex gap-3 mt-8">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-sm border ${
              currentPage === i + 1
                ? "bg-[#E3A107] text-white border-[#E3A107]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemFilterComp;
