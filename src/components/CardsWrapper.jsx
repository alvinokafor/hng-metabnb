import Card from "./Card";
import {useLocation} from 'react-router-dom'

const CardData = [
  "/assets/sand-house.png",
  "/assets/forest-tower.png",
  "/assets/future-house.png",
  "/assets/jungle-house.png",
  "/assets/office.png",
  "/assets/heros.png",
  "/assets/dreamy.png",
  "/assets/harry-potter.png",
];

export default function CardsWrapper({ margin, allCards }) {

  const location = useLocation().pathname
  const currentPath = location.split('/')[1]
  

  return (
    <section
      className={`${margin} mt-10 grid gap-y-8 md:gap-y-8 md:gap-x-6 lg:gap-x-20 place-content-end grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
    >
      {currentPath === "" && CardData.map((card, index) => (
        <Card key={index + 1} image={card} />
      ))}

      {currentPath === 'places-to-stay' && allCards.map((card, index) => (
        <Card key={index + 1} image={card} />
      ))}
    </section>
  );
}
