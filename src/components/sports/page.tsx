import Image from "next/image";

export default function Sports() {
    return (
      <div>
        <h1>sports</h1>
        <Image src='https://i.ibb.co/BPhLty6/original-e6f9ef9e2c570d0d612b1775155a4d63.png'
            width={500} 
            height={500}
            alt='next logo' ></Image>
      </div>
    );
  }

  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      imageUrl: "https://example.com/card1.png",
      description: "Description of card 1",
    },
    {
      id: 2,
      title: "Card 2",
      imageUrl: "https://example.com/card2.png",
      description: "Description of card 2",
    },
    {
      id: 1,
      title: "Card 1",
      imageUrl: "https://example.com/card1.png",
      description: "Description of card 1",
    },
    {
      id: 2,
      title: "Card 2",
      imageUrl: "https://example.com/card2.png",
      description: "Description of card 2",
    },
  ];
  