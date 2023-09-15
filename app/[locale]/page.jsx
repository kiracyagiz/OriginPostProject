import { useTranslations } from "next-intl";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";

export default function Home() {
  const t = useTranslations("Header");
  const nav1 = t("nav1");
  const nav2 = t("nav2");
  const nav3 = t("nav3");
  const nav4 = t("nav4");
  const navButton = t("navButton");
  return (
    <div className="bg-gray-100">
      <Header
        nav1={nav1}
        nav2={nav2}
        nav3={nav3}
        nav4={nav4}
        navButton={navButton}
        locale={"/sq"}
        localeEn={"/en"}
      />
      <Hero />
      <Price />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
