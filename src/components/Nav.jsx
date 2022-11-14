import React from "react";
import Logo from "/assets/logo.svg";
import NavButton from "./NavButton";

export default function Nav() {

    const menuHandler = () => {
      const mobileMenu = document.getElementById('mobile-menu')
      
      const visibility = mobileMenu.getAttribute('data-visible')

      if (visibility === 'false') {
        mobileMenu.setAttribute('data-visible', 'true')
      } else if (visibility === 'true') {
        mobileMenu.setAttribute('data-visible', 'false')
      }
    }


  return (
    <>
      <nav className="flex items-center justify-between w-[90%] mx-auto md:w-full md:px-[100px] mt-4">
        <img src={Logo} alt="Metabnb Logo" />

        <ul className="hidden lg:flex justify-between gap-x-12 text-secondary">
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>

        <NavButton menuHandler={menuHandler}/>
      </nav>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        data-visible="false"
        className="lg:hidden justify-between space-y-2 text-secondary text-center mt-8 text-lg font-bold"
      >
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      {/* Mobile Menu */}
    </>
  );
}
