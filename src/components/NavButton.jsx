import React from "react";

export default function NavButton({menuHandler, setModalOpen}) {
  return (
    <>
      <button onClick={() => setModalOpen(true)} className="bg-primary py-4 px-6 rounded-lg text-white hidden lg:block">
        Connect to wallet
      </button>
      <button onClick={menuHandler} className="bg-primary py-2 px-4 rounded-lg text-white lg:hidden">
        Menu
      </button>
    </>
  );
}
