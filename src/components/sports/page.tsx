import Image from "next/image";

export default function Sports() {
  return (
    <div>
      <div className=" w-14 my-4 border-b border-[#738FFF]">
        <h1 className="font-bold ">Sports</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cardsData.map((card) => (
          <div className="p-3 bg-white shadow-md lg:shadow-xl" key={card?.id}>
            <Image
              src={card?.imageUrl}
              width={200}
              height={200}
              alt={card?.alt}
            />
            <h2 className="text-[#000000] font-semibold py-3">{card?.title}</h2>
            <div className="bg-[#F7F7F8] flex justify-between py-1 px-2 rounded">
              <div className="">
                <p className="text-[12px] text-[#525965]">Total Events</p>
                <p className="text-[#000000] font-semibold text-sm">
                  {card?.events} Events
                </p>
              </div>
              <div className="">
                <p className="text-[12px] text-[#525965]">Sport</p>
                <p className="text-[#000000] font-semibold text-sm">
                  {card?.sport}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="p-3 bg-white shadow-md lg:shadow-xl">
          <div className="relative">
            <Image
              src="https://i.ibb.co/2SgPwTt/unnamed-1-1.png"
              width={200}
              height={200}
              alt="Advertisement title"
            />
            <p className="absolute text-[12px] bg-black text-white top-0 right-0 py-1 px-4">
              Ad
            </p>
          </div>
          <div className=" border-l border-b border-[#006555] p-3">
            <h2 className="text-[#000000] font-semibold pb-2">
              Advertisement title
            </h2>
            <div className="">
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <button className=" w-28 h-10 bg-[#2C9CF0] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
          <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          See More
        </button>
      </div>
    </div>
  );
}

const cardsData = [
  {
    id: 1,
    title: "Sacramento River Cats",
    imageUrl:
      "https://i.ibb.co/6nBMCCw/277307281-10158751675643224-148609460173032344-n.png",
    events: 48,
    sport: "Baseball",
    alt: "Baseball",
  },
  {
    id: 2,
    title: "Las Vegas Aviators",
    imageUrl:
      "https://i.ibb.co/8Nn32hK/370265821-812394460893172-8391088016650457893-n-1.png",
    events: 28,
    sport: "Baseball",
    alt: "Baseball",
  },
  {
    id: 3,
    title: "New Jersey Devils",
    imageUrl:
      "https://i.ibb.co/F4M2zSs/395319316-1098948761258832-1320994362450036961-n-1.png",
    events: 15,
    sport: "Ice Hockey",
    alt: "Ice Hockey",
  },
  {
    id: 4,
    title: "Las Vegas Aviators",
    imageUrl:
      "https://i.ibb.co/8Nn32hK/370265821-812394460893172-8391088016650457893-n-1.png",
    events: 28,
    sport: "Baseball",
    alt: "Baseball",
  },
];
