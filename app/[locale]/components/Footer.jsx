import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Locale");
  const p = useTranslations("Footer");
  return (
    <div className="h-32 bg-black flex items-center  md:justify-between">
      <div className="mx-auto flex flex-col md:flex-row gap-x-96  gap-y-4 md:text-center justify-between">
        <div className="text-primaryYellow text-2xl font-semibold roboto700 relative group cursor-pointer">
          <div>
            Pos.
            <div className="w-0 bg-primaryYellow h-under  opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
          </div>
        </div>

        <div className="list-none text-semibold text-sm md:text-md flex  gap-x-4 md:gap-x-16 roboto700 text-primaryYellow">
          <Link href={`${t("locale")}`}>
            <li className="relative group text-xs md:text-sm ">
              {p("home")}
              <div className="w-0 bg-primaryYellow h-under   opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </li>
          </Link>

          <Link href={`${t("locale")}/terms`}>
            <li className="relative group text-xs md:text-sm">
              {p("terms")}
              <div className="w-0 bg-primaryYellow h-under  opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </li>
          </Link>
          <Link href={`${t("locale")}/about`}>
            <li className="relative group text-xs md:text-sm">
              {p("about")}
              <div className="w-0 bg-primaryYellow h-under  opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </li>
          </Link>
          <Link href={`${t("locale")}/faq`}>
            <li className="relative group text-xs md:text-sm">
              FAQ
              <div className="w-0 bg-primaryYellow h-under  opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
