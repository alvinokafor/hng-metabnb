import ContentWrapper from "./ContentWrapper";
import Search from "../components/Search";

export default function HeroSection() {
  return (
    <section className="mt-16 lg:mt-32 text-center lg:text-left">
      <ContentWrapper>
        <div className="text-secondary lg:flex lg:items-center">
          {/* Hero Text Content Start */}
          <section>
            <p className="text-4xl leading-normal lg:text-[3.5rem] lg:w-4/5">
              Rent a <span className="text-primary">Place</span> away from{" "}
              <span className="text-primary">Home</span> in the{" "}
              <span className="text-primary">Metaverse</span>{" "}
            </p>

            <p className="mt-8 text-base lg:text-lg lg:w-3/5">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>

            <Search />
          </section>
          {/* Hero Text Content End */}

          {/* Hero Image Section */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col gap-2 mr-2">
              <div className="w-[176px] h-[132px] lg:w-[234px] lg:h-[176px]">
                <img
                  className="w-full h-full"
                  src="/assets/morden-house.png"
                  alt="Hero Image"
                />
              </div>

              <div className="w-[176px] h-[132px] lg:w-[234px] lg:h-[176px]">
                <img
                  className="w-full h-full"
                  src="/assets/snow-house.png"
                  alt="Hero Image"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative bottom-6 lg:bottom-24">
              <div className="w-[176px] h-[132px] lg:w-[234px] lg:h-[176px]">
                <img
                  className="w-full h-full"
                  src="/assets/shop.png"
                  alt="Hero Image"
                />
              </div>

              <div className="w-[176px] h-[132px] lg:w-[234px] lg:h-[176px]">
                <img
                  className="w-full h-full"
                  src="/assets/castle.png"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          {/* Hero Image Section */}
        </div>
      </ContentWrapper>
    </section>
  );
}
