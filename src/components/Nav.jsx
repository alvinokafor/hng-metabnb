import { Link } from "react-router-dom";
import Logo from "/assets/logo.svg";
import NavButton from "./NavButton";

export default function Nav({ setModalOpen }) {
  const menuHandler = () => {
    const mobileMenu = document.getElementById("mobile-menu");

    const visibility = mobileMenu.getAttribute("data-visible");

    if (visibility === "false") {
      mobileMenu.setAttribute("data-visible", "true");
    } else if (visibility === "true") {
      mobileMenu.setAttribute("data-visible", "false");
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between w-[90%] mx-auto md:w-full md:px-[100px] mt-4">
        <img src={Logo} alt="Metabnb Logo" />

        <ul className="hidden lg:flex justify-between gap-x-12 text-secondary">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Place to stay</li>
          <Link to="/nfts">
            <li>NFTs</li>
          </Link>
          <li>Community</li>
        </ul>

        <NavButton menuHandler={menuHandler} setModalOpen={setModalOpen} />
      </nav>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        data-visible="false"
        className="lg:hidden justify-between space-y-2 text-secondary text-center mt-8 text-lg font-bold"
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Place to stay</li>

        <Link to="/nfts">
          <li>NFTs</li>
        </Link>

        <li>Community</li>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-primary py-4 px-6 rounded-lg text-white lg:hidden"
        >
          Connect to wallet
        </button>
      </ul>
      {/* Mobile Menu */}
    </>
  );
}
