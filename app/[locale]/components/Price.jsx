import React from "react";
import PriceBox from "./PriceBox";
import { useTranslations } from "next-intl";

const Price = () => {
  const t = useTranslations("Price");
  return (
    <div className="h-fit p-8" id="pricing">
      <p className="text-center text-3xl font-bold md:mt-20">{t("title")}</p>

      <div className="flex flex-wrap md:mx-67 gap-y-12 mt-14">
        <PriceBox
          feature={"Pos"}
          price={`400ALL/${t("monthly")}`}
          desc={t("pos")}
        />
        <PriceBox
          feature={"Pos + Cash"}
          price={`200ALL/${t("monthly")}`}
          desc={t("posCash")}
        />
        <PriceBox
          feature={"Pos + E-Invoice"}
          price={`200ALL/${t("monthly")}`}
          desc={t("posE-invoice")}
        />
        <PriceBox
          feature={t("restApidec")}
          price={`500ALL/${t("monthly")}`}
          desc={t("restapi")}
        />
      </div>
    </div>
  );
};

export default Price;
