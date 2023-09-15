import FaqComp from "../components/FaqComp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("Header");
  const nav1 = t("nav1");
  const nav2 = t("nav2");
  const nav3 = t("nav3");
  const nav4 = t("nav4");
  const navButton = t("navButton");
  const p = useTranslations("Faq");

  return (
    <div className="bg-gray-100 h-screen">
      <Header
        nav1={nav1}
        nav2={nav2}
        nav3={nav3}
        nav4={nav4}
        navButton={navButton}
        locale={"/sq/faq"}
        localeEn={"/en/faq"}
      />
      <p className="roboto700 text-center mt-8 text-3xl mb-8">{p("title")}</p>

      <div className="container items-center mt-4 bg-gray-100 py-4 pb-14  mx-auto ">
        <FaqComp text={p("c1")} desc={``} />
        <FaqComp text={p("c2")} desc={``} />
        <FaqComp text={p("c3")} desc={``} />
        <FaqComp text={p("c4")} desc={``} />
        <FaqComp text={p("c5")} desc={``} />
        <FaqComp text={p("c7")} desc={``} />
        <FaqComp text={p("c8")} desc={``} />
        <FaqComp text={p("c9")} desc={``} />
        <FaqComp text={p("c10")} desc={``} />
        <FaqComp text={p("c11")} desc={``} />
        <FaqComp text={p("c12")} desc={``} />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
