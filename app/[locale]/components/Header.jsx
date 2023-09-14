"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ButtonPrimary from "./ButtonPrimary";
import Language from "./Language";

const Header = ({ nav1, nav2, nav3, nav4, navButton }) => {
  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <header
      className={`flex justify-between  items-center h-100 bg-primaryYellow`}
    >
      <div className="flex justify-between p-6 md:mx-67 gap-x-44 ">
        <div className="items-center flex justify-between">
          <p className="font-semibold text-3xl">Pos.</p>
        </div>
        <nav className="items-center hidden md:flex justify-between  list-none font-bold gap-x-10 text-lg">
          <li>{nav1}</li>
          <li>{nav2}</li>
          <li>{nav3}</li>
          <li>{nav4}</li>
          <li className="">
            <ButtonPrimary text={navButton} />
          </li>
          <Language />
        </nav>
      </div>

      <HamburgerMenu togglePanel={togglePanel} panelOpen={panelOpen} />
      {panelOpen && (
        <div className=" transform transition duration-700 ease-in-out fixed top-0 right-0 bottom-0 h-full w-1/2 bg-primaryYellow p-4 shadow-md ">
          <div className="flex flex-col list-none font-bold text-lg text-center items-center mt-52 gap-y-8">
            <li>{nav1}</li>
            <li>{nav2}</li>
            <li>{nav3}</li>
            <li>{nav4}</li>

            <ButtonPrimary text="Login" />
            <Language />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
