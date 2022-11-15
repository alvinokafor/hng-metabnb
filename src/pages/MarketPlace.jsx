import {useState} from "react";
import Nav from "../components/Nav";
import Footer from "../modules/Footer";
import CardsWrapper from "../components/CardsWrapper";
import NftSelection from "../components/NftSelection";
import ContentWrapper from "../modules/ContentWrapper";
import Modal from "../modules/Modal";

const allCards = [
  "/assets/office.png",
  "/assets/heros.png",
  "/assets/dreamy.png",
  "/assets/harry-potter.png",
  "/assets/sand-house.png",
  "/assets/forest-tower.png",
  "/assets/future-house.png",
  "/assets/jungle-house.png",
  "/assets/shop.png",
  "/assets/castle-card.png",
  "/assets/santa.png",
  "/assets/winter-cottage.png",
  "/assets/club.png",
  "/assets/park.png",
  "/assets/duplex.png",
  "/assets/north-pole.png",
];


export default function MarketPlace() {

  const [isOpen, setModalOpen] = useState(false)

  return (
    <main>
      <Nav setModalOpen={setModalOpen}/>
      <NftSelection />

      <ContentWrapper>
        <CardsWrapper margin='mb-24' allCards={allCards}/>
      </ContentWrapper>

      <Footer />

      {isOpen && <Modal setModalOpen={setModalOpen}/>}
    </main>
  );
}
