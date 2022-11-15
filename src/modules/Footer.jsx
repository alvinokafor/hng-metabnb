import ContentWrapper from "./ContentWrapper";
import Twitter from "/assets/twitter.svg";
import Instagram from "/assets/instagram.svg";
import Facebook from "/assets/facebook.svg";

export default function Footer() {
  return (
    <section className="bg-footer">
      <ContentWrapper>
        <div className="text-white text-center lg:text-left lg:flex lg:justify-between py-16">
          <div className="mb-4 lg:flex lg:flex-col lg:justify-between">
            <div className="w-[242px] h-[40px] mx-auto mb-10 lg:mb-0">
              {" "}
              <img
                className="w-full h-full"
                src="/assets/white-logo.png"
                alt="logo"
              />{" "}
            </div>

            <div className="justify-center mb-8 lg:mb-0 lg:justify-start flex items-center space-x-6">
              <img src={Facebook} alt="facebook" />
              <img src={Instagram} alt="instagram" />
              <img src={Twitter} alt="twitter" />
            </div>
          </div>

          <div className="space-y-8 lg:flex lg:space-x-56 lg:justify-between lg:space-y-0">
            <ul className="space-y-2">
              <li className="mb-4 font-bold">Community</li>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>

            <ul className="space-y-2">
              <li className="mb-4 font-bold">Places</li>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>

            <ul className="space-y-2">
              <li className="mb-4 font-bold">About us</li>
              <li>Roadmap</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <p className="text-white pb-6 text-center lg:text-left">
          &copy; 2022 Metabnb
        </p>
      </ContentWrapper>
    </section>
  );
}
