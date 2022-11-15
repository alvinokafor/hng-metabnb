import ContentWrapper from "./ContentWrapper";

export default function MoreInfo() {
  return (
    <section className="bg-primary text-center lg:text-left mt-14">
      <ContentWrapper>
        <div className="space-y-6 py-12 lg:flex lg:items-center lg:space-y-0">
          <div className="text-white space-y-4 lg:space-y-8 lg:flex-1">
            <h3 className="text-4xl">Metabnb NFTs</h3>
            <p className="lg:w-4/5">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="bg-white py-4 px-6 rounded-lg text-primary">Learn More</button>
          </div>

          <div className="w-[325px] h-[266px] lg:w-[704px] lg:h-[574px] mx-auto lg:">
            <img
              className="w-full h-full"
              src="/assets/image-group.png"
              alt="image stack"
            />
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}
