import { Link } from "react-router-dom";

const AmazingAfrica = "/assets/books/Amazing-Africa.png";
const AnnaHibiscus = "/assets/books/Anna-Hibiscus.png";
const CarSpotter = "/assets/books/carSpotter.png";
const DoubleTrouble = "/assets/books/doubleTrouble.png";
const TooSmallTola = "/assets/books/Too-Small-Tola.png";

export default function BooksGrid() {
  const bookImages = [
    { src: CarSpotter, alt: "No. 1 Car Spotter Goes To School" },
    { src: AnnaHibiscus, alt: "Anna-Hibiscus" },
    { src: AmazingAfrica, alt: "Amazing-Africa" },
    { src: DoubleTrouble, alt: "Double Trouble" },
    { src: TooSmallTola, alt: "Too Small Tola Makes It Count" },
  ];
  return (
    <>
      <ul className="flex gap-4 p-4 overflow-x-hidden scrollbar-hide">
        {bookImages.map((items, index) => (
          <li key={index} className="flex-shrink-0">
            <img
              src={items.src}
              alt={items.alt}
              className=" h-[11em] md:h-[15em]"
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-end font-body pt-10 w-full md:px-34">
        <Link
          to="/books"
          className="font-body bg-orange-400/80 cursor-pointer font-semibold md:text-lg px-8 py-3 rounded-full text-white"
        >
          {/* <button > */}
          Buy a Book
          {/* </button> */}
        </Link>
      </div>
    </>
  );
}
