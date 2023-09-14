import { useTranslations } from "next-intl";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";
import posmain from "../../../public/pos-main.png";
import TextPrimary from "./TextPrimary";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="bg-gray-100">
      <div className="p-8 md:p-0 flex flex-col items-center font-bold text-center mt-6 md:mt-16 gap-y-10">
        <h1 className="text-3xl max-w-md">{t("title")}</h1>
        <TextPrimary text={t("desc")} font={"text-2xl"} />
        <ButtonPrimary text={t("heroButton")} />
        <Image src={posmain} className="md:px-16"></Image>
      </div>
    </div>
  );
};

export default Hero;
