import ContentWrapper from "../modules/ContentWrapper";
import Filter from "/assets/filter.svg";

export default function NftSelection() {
  return (
    <ContentWrapper>
      <ul className="text-lg flex flex-wrap items-center space-x-12 mt-32 mb-20 text-secondary">
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantasy city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        <button className="flex items-center px-3 py-[14px] border border-secondary rounded-lg">
          Location <img className="ml-10" src={Filter} alt="filter" />
        </button>
      </ul>
    </ContentWrapper>
  );
}
