import {useState} from "react";
import Nav from "../components/Nav";
import HeroSection from "../modules/HeroSection";
import Banner from "../modules/Banner";
import Featured from "../modules/Featured";
import MoreInfo from "../modules/MoreInfo";
import Footer from "../modules/Footer";
import Modal from "../modules/Modal";


export default function Home() {

  const [isOpen, setModalOpen] = useState(false)

  return (
    <main className="border-box">
      <Nav setModalOpen={setModalOpen}/>

      <HeroSection />
      <Banner />
      <Featured />
      <MoreInfo />
      <Footer />

      {isOpen && <Modal setModalOpen={setModalOpen}/>}
    </main>
  );
}
