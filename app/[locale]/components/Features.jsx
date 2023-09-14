import React from "react";
import FeaturesCard from "./FeaturesCard";
import laptophand from "../../../public/laptop-hand.png";
import mobilehand from "../../../public/mobile-hand.png";
import tablethand from "../../../public/tablet-hand.png";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("Features");
  return (
    <div className="h-fit">
      <h2 className="text-3xl font-semibold text-center  mt-16">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-y-32 mt-8 bg-gray-100">
        <FeaturesCard
          ImagepositionLeft={true}
          imagesrc={laptophand}
          h2={t("c1t1")}
          h1={t("c1t2")}
          p={t("c1t3")}
          primary1={t("c1t4")}
          primary2={t("c1t5")}
        />

        <FeaturesCard
          ImagepositionLeft={false}
          imagesrc={mobilehand}
          h2={t("c2t1")}
          h1={t("c2t2")}
          p={t("c2t3")}
          primary1={t("c2t4")}
          primary2={t("c2t5")}
        />

        <FeaturesCard
          ImagepositionLeft={true}
          imagesrc={tablethand}
          h2={t("c3t1")}
          h1={t("c3t2")}
          p={t("c3t3")}
          primary1={t("c3t4")}
          primary2={t("c3t5")}
        />
      </div>
    </div>
  );
};

export default Features;
