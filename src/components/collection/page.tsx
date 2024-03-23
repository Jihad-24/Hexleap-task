import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../context/DarkModeContext";

export default function Collection() {
  const authContext = useContext(AuthContext);

  const isDark = authContext?.isDark ?? false;


  return (
    <div className={`py-12 ${isDark ? "bg-[#18282A]" : "bg-[#F8F8FF]"}`}>
      <div className="text-center space-y-6 pb-6">
        <h1 className="font-semibold text-3xl">Collection Spotlight</h1>
        <p className="font-medium px-2 md:px-24 text-sm">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        <div className="hidden md:flex justify-around">
          <svg
            viewBox="0 0 1024 1024"
            className="w-6 h-6 md:w-10 md:h-10 p-1 text-sky-600 border border-sky-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </svg>
        </div>
        {cardsData.map((card) => (
          <div
            className={` ${isDark ? "bg-[#3B3E47]" : "bg-white"} shadow-md`}
            key={card?.id}
          >
            <Image
              src={card?.imageUrl}
              width={500}
              height={200}
              alt={card?.alt}
            />
            <div className="relative ">
              <div
                className={`absolute w-5 h-5 -left-2.5 -top-2.5 rounded-full ${
                  isDark ? "bg-[#18282A]" : "bg-[#F8F8FF]"
                }  `}
              ></div>
              <hr
                className={`my-3 border border-dashed ${
                  isDark ? "border-[#818A97]" : "border-gray-300"
                } `}
              />
              <div
                className={`absolute w-5 h-5 -right-2.5 -top-2.5 rounded-full ${
                  isDark ? "bg-[#18282A]" : "bg-[#F8F8FF] "
                } `}
              ></div>
            </div>
            <div className="text-center px-3 pb-2 space-y-1">
              <h2
                className={`${
                  isDark ? "text-FFFFFF" : "text-[#000000]"
                }  font-medium`}
              >
                {card?.title}
              </h2>
              <p className="uppercase text-sm font-normal">{card?.date}</p>
              <p
                className={` text-[13px] ${
                  isDark ? "text-[#DFDFDF]" : "text-[#525965]"
                }`}
              >
                {card?.address}
              </p>
              <button
                className={`${
                  isDark ? "bg-[#000000]" : "bg-[#1D1D1F]"
                } text-[#FFFFFF] text-sm w-full py-1 font-normal`}
              >
                {card?.btntext}
              </button>
            </div>
          </div>
        ))}
        <div className="hidden md:flex justify-around">
          <svg
            viewBox="0 0 1024 1024"
            className="w-6 h-6 md:w-10 md:h-10 p-1 icon text-sky-600 border border-sky-500"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path
              fill="currentColor"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

const cardsData = [
  {
    id: 1,
    title: "Las Vegas Aviators",
    imageUrl: "https://i.ibb.co/bLr6HhJ/Ticket-Mockup-3.png",
    date: "Oct 15 | sun | 4:30 pm",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    alt: "Las Vegas Aviators",
    btntext: "Take Flight Collection",
  },
  {
    id: 2,
    title: "Sacramento River Cats",
    imageUrl: "https://i.ibb.co/Tk11mgH/unnamed-1.png",
    date: "Oct 15 | sun | 4:30 pm",
    address: "Sutter Health Park, Sacramento, California",
    alt: "Sacramento River Cats",
    btntext: "Orange Collection",
  },
  {
    id: 3,
    title: "Las Vegas Aviators",
    imageUrl: "https://i.ibb.co/bLr6HhJ/Ticket-Mockup-3.png",
    date: "Oct 15 | sun | 4:30 pm",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    alt: "Las Vegas Aviators",
    btntext: "Take Flight Collection",
  },
];
