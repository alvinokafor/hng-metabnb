import React from "react";
import Logo from "/assets/logo.svg";
import NavButton from "./NavButton";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-[90%] mx-auto md:w-full md:px-[100px] mt-4">
      <img src={Logo} alt="Metabnb Logo" />

      <ul className="hidden lg:flex justify-between gap-x-12 text-secondary">
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>

      <NavButton />
    </nav>
  );
}
