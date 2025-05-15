import React from "react";

function Navbar() {
  return (
    <div className="mt-6 max-w-sm mx-auto bg-violet-500 p-6 border border-gray-300 rounded-lg shadow-lg">
      <img
        src="https://cdn-icons-png.flaticon.com/128/2/2206.png"
        width={50}
        alt=""
        className="rounded-full m-auto "
      />

      <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
        Tailwind card
      </h2>
      <p className="text-gray-700 text-center">
        This is a simple card component styled with Tailwind CSS. It uses
        border, shadow, and rounded corners.
      </p>
      <button className="flex m-auto px-4 py-1 mt-4 rounded-md bg-black text-white cursor-pointer hover:bg-white hover:text-black items-center justify-center border-white hover:border-black border-2">
        Follow
      </button>
    </div>
  );
}

export default Navbar;
