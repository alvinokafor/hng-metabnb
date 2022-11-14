import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../modules/HeroSection";
import Banner from "../modules/Banner";
import Featured from "../modules/Featured";

export default function Home() {
  return (
    <main className="border-box">
      <Nav />

      <HeroSection />
      <Banner />
      <Featured />
    </main>
  );
}
