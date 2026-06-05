const Update = ({ image, category, title, description }) => {
  const categoryColors = {
    Events: "bg-[#5E9F43]",
    News: "bg-blue-500",
    Alert: "bg-red-500",
    Education: "bg-[#09230F]",
    Literatures: "bg-[#E3A107]",
    Default: "bg-gray-500",
  };

  return (
    <>
      <div className="md:w-screen font-body sm:w-[456px]">
        {/* Image container with styled border */}
        <div className="w-fit h-fit border-[0px] [box-shadow:inset_0_0_0_20px_url('/assets/Books.png')]">
          <img className="h-inherit" src={image} alt={title} />
        </div>

        {/* Category tag */}
        <div
          className={`${categoryColors[category] || categoryColors.Default} w-fit py-2 px-4 text-white font-bold mt-8 mb-4`}
        >
          <h2>{category}</h2>
        </div>

        {/* Text content */}
        <div>
          <h1 className="font-semibold text-2xl line-clamp-1">{title}</h1>
          <div className="mt-2 mb-4">
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
