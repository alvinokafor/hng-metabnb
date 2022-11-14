import ContentWrapper from "./ContentWrapper";
import MBToken from '/assets/mb-token.svg'
import MetaMaskBanner from '/assets/metamask-banner.svg'
import OpenSea from '/assets/opensea.svg'

export default function Banner() {
  return (
    <section className="bg-primary mt-16">
      <ContentWrapper>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:justify-between md:space-y-0 py-4">
          <img src={MBToken} alt="mb-token" />
          <img src={MetaMaskBanner} alt="metamask" />
          <img src={OpenSea} alt="opensea" />
        </div>
      </ContentWrapper>
    </section>
  );
}
