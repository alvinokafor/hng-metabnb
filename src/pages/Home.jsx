import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../modules/HeroSection";

export default function Home() {
  return (
    <main className="border-box">
      <Nav />

      <HeroSection />
    </main>
  );
}
