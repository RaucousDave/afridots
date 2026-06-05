const Subscribe = () => {
  return (
    <div
      className="h-16 font-body relative mt-4 w-full text-white max-w-md border-2 flex items-center border-yellow-500 rounded-full 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             transition duration-200 focus:border-l-0"
    >
      <input
        type="text"
        placeholder="email"
        className=" pl-2 h-13 sm:pl-5 w-1/2 md:flex-3 rounded-l-full"
      />
      <div className="h-full border-black flex-1 md:flex-2 py-1 pr-1">
        <button className=" bg-[#E3A107] h-full    rounded-full w-full cursor-pointer font-bold">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
