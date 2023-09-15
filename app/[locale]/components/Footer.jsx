import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Locale");
  return (
    <div className="h-32 bg-black flex items-center  md:justify-between">
      <div className="mx-auto flex flex-col md:flex-row gap-x-96  gap-y-4 md:text-center justify-between">
        <div className="text-primaryYellow text-2xl font-semibold roboto700">
          <p>Pos.</p>
        </div>

        <div className="list-none text-semibold text-sm md:text-md flex  gap-x-4 md:gap-x-16 roboto700 text-primaryYellow">
          <li>HOME</li>

          <Link href={`${t("locale")}/terms`}>
            <li>TERMS</li>
          </Link>
          <Link href={`${t("locale")}/about`}>
            <li>ABOUT</li>
          </Link>
          <Link href={`${t("locale")}/faq`}>
            <li>FAQ</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
