import { useTranslations } from "next-intl";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";

export default function Home({ params }) {
  const t = useTranslations("Header");
  const param = params;
  return (
    <div className="bg-gray-100">
      <Header
        nav1={t("nav1")}
        nav2={t("nav2")}
        nav3={t("nav3")}
        nav4={t("nav4")}
        navButton={t("navButton")}
        locale={"/sq"}
        localeEn={"/en"}
        localeTr={"/tr"}
        param={param.locale}
      />
      <Hero param={param.locale} />
      <Price />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
