"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import ButtonPrimary from "./ButtonPrimary";
import Language from "./Language";
import Link from "next/link";

const Header = ({
  nav1,
  nav2,
  nav3,
  nav4,
  navButton,
  locale,
  localeEn,
  param,
}) => {
  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <header
      className={`flex justify-between items-center h-100 bg-primaryYellow`}
    >
      <div className="flex justify-between p-6 md:mx-67 gap-x-44 animate-slide-down ">
        <div className="items-center flex justify-between ">
          <a className="heroRoboto" href={"/"}>
            Pos.
          </a>
        </div>
        <nav className="items-center hidden md:flex justify-between  list-none roboto700 font-bold  gap-x-10 text-xl">
          <a href={`/#pricing`}>{nav1}</a>
          <a href="/#features">{nav2}</a>
          <Link href="https://posal.tawk.help/">{nav3}</Link>
          <a href="/#contact">{nav4}</a>

          <ButtonPrimary text={navButton} />

          <Language locale={locale} localeEn={localeEn} param={param} />
        </nav>
      </div>

      <HamburgerMenu togglePanel={togglePanel} panelOpen={panelOpen} />

      <div
        className={`${
          panelOpen ? "right-0 " : "right-[-100%] duration-1000"
        }  duration-700 ease-in-out fixed top-0 right-0 bottom-0 h-full w-1/2 bg-primaryYellow p-4 shadow-md `}
      >
        <div className="flex flex-col roboto700   text-xl text-center items-center mt-44 gap-y-8">
          <div onClick={togglePanel} className="flex flex-col gap-y-8">
            <a href={`/#pricing`}>{nav1}</a>
            <a href="/#features">{nav2}</a>
            <Link href="https://posal.tawk.help/">{nav3}</Link>
            <a href="/#contact">{nav4}</a>
          </div>

          <ButtonPrimary text={navButton} />
          <Language locale={locale} localeEn={localeEn} param={param} />
        </div>
      </div>
    </header>
  );
};

export default Header;
