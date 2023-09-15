"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ButtonPrimary from "./ButtonPrimary";
import Language from "./Language";
import Link from "next/link";

const Header = ({ nav1, nav2, nav3, nav4, navButton, locale, localeEn }) => {
  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <header
      className={`flex justify-between   items-center h-100 bg-primaryYellow`}
    >
      <div className="flex justify-between p-6 md:mx-67 gap-x-44 animate-slide-down ">
        <div className="items-center flex justify-between ">
          <p className="heroRoboto ">Pos.</p>
        </div>
        <nav className="items-center hidden md:flex justify-between  list-none roboto700 font-bold  gap-x-10 text-xl">
          <a href={`#pricing`}>{nav1}</a>
          <a href="#features">{nav2}</a>
          <Link href="https://posal.tawk.help/">{nav3}</Link>
          <a href="#contact">{nav4}</a>

          <li className="">
            <ButtonPrimary text={navButton} />
          </li>
          <Language locale={locale} localeEn={localeEn} />
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
            <Language locale={locale} localeEn={localeEn} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
