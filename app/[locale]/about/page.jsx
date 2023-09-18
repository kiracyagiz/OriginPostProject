import React from "react";
import Header from "../components/Header";
import { useTranslations } from "next-intl";
import TextPrimary from "../components/TextPrimary";
import Footer from "../components/Footer";
const About = ({ params }) => {
  const t = useTranslations("Header");
  const p = useTranslations("About");
  const headerProps = {
    nav1: t("nav1"),
    nav2: t("nav2"),
    nav3: t("nav3"),
    nav4: t("nav4"),
    navButton: t("navButton"),
    locale: "/sq/about",
    localeEn: "/en/about",
    localeTr: "/tr/about",
    param: params.locale,
  };
  return (
    <div className="bg-gray-100">
      <Header
        nav1={t("nav1")}
        nav2={t("nav2")}
        nav3={t("nav3")}
        nav4={t("nav4")}
        navButton={t("navButton")}
        locale={"/sq/about"}
        localeEn={"/en/about"}
        param={params.locale}
      />
      <div className="bg-gray-100 mt-8 mb-16  h-fit">
        <div className=" mx-auto flex gap-y-3 flex-col max-w-3xl p-12 rounded-lg shadow-2xl border border-gray-200 p bg-white">
          <h2 className=" aboutTitle text-center mb-4">{p("title")}</h2>
          <p className="roboto400 text-lg leading-7 text-primaryAbout">
            {p("c1")}
          </p>
          <p className="roboto400 text-lg leading-7 text-primaryAbout">
            {p("c2")}
          </p>
          <p className="roboto700 text-3xl text-secondaryAbout text-center">
            {p("c3")}
          </p>
          <div className="flex flex-col gap-x-2">
            <TextPrimary text={p("c4")} fontStyle={"roboto400"} />
            <TextPrimary text={p("c5")} fontStyle={"roboto400"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
