import ContentWrapper from "../modules/ContentWrapper";
import Filter from "/assets/filter.svg";

export default function NftSelection() {
  return (
    <ContentWrapper>
      <ul className="text-xl flex items-center space-x-12 mt-32 mb-20 text-secondary">
        <li className="hidden lg:block">Resturant</li>
        <li className="hidden lg:block">Cottage</li>
        <li className="hidden lg:block">Castle</li>
        <li className="hidden lg:block">fantasy city</li>
        <li className="hidden lg:block">beach</li>
        <li className="hidden lg:block">Carbins</li>
        <li className="hidden lg:block">Off-grid</li>
        <li className="hidden lg:block">Farm</li>
        <button className="flex items-center ml-16 px-3 py-[14px] border border-secondary rounded-lg">
          Location <img className="ml-10" src={Filter} alt="filter" />
        </button>
      </ul>
    </ContentWrapper>
  );
}
