import ContentWrapper from "./ContentWrapper";
import CardsWrapper from "../components/CardsWrapper";

export default function Featured() {
  return (
    <section className="mx-auto">
      <ContentWrapper>
        <div>
          <h3 className="text-black font-bold text-center text-3xl lg:text-5xl mt-14">
            Inspiration for your next adventure
          </h3>
        </div>

        <CardsWrapper />
      </ContentWrapper>
    </section>
  );
}
