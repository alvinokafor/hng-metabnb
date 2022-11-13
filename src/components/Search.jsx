import React from "react";

export default function Search() {
  return (
    <form className="mt-6 relative lg:w-4/6">
      <input
        type="text"
        placeholder="Search for location"
        className="border-2 border-slate-400 outline-none lg:py-3 py-2 pl-2 rounded-lg lg:w-full"
      />

      <button className="bg-primary lg:py-3 py-2 px-4 translate-x-[-100%] rounded-r-lg lg:w-[230px] absolute top-0 bottom-0 text-white">
        Search
      </button>
    </form>
  );
}
