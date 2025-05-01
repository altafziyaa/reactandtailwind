import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <header className="p-4 bg-blue-300">
      <div className=" max-w-screen-xl flex mx-auto justify-between items-center ">
        <img src="https://cdn-icons-png.flaticon.com/128/7425/7425907.png" alt="" width={40} />
        <ul className="hidden md:flex gap-4 pr-2 text-xl">
          <li className="bg-white px-2 rounded hover:bg-black hover:text-white">
            home
          </li>
          <li className="bg-white px-2 rounded hover:bg-black hover:text-white">
            about
          </li>
          <li className="bg-white px-2 rounded hover:bg-black hover:text-white">
            contact
          </li>
        </ul>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}>
          <img
            src="https://www.svgrepo.com/show/493681/hamburger-menu-mobile.svg"
            alt="Menu"
            width={30}
          />
        </button>
      </div>
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-2 text-xl">
          <li className="bg-white px-2 rounded hover:bg-black hover:text-white">
            Home
          </li>
          <li className="bg-white px-2 rounded hover:bg-black hover:text-white">
            About
          </li>
          <li className="bg-white px-2 rounded hover:bg-black hover:text-white">
            Contact
          </li>
        </ul>
      )}
    </header>
  );
}

export default App;
