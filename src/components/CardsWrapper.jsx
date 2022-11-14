import Card from "./Card";

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

export default function CardsWrapper() {
  return (
    <section className="mt-10 grid gap-y-8 md:gap-y-8 place-content-end grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {CardData.map((card, index) => (
        <Card key={index + 1} image={card} />
      ))}
    </section>
  );
}
