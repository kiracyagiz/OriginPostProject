import FaqComp from "../components/FaqComp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslations } from "next-intl";

const FAQ = ({ params }) => {
  const t = useTranslations("Header");
  const p = useTranslations("Faq");

  return (
    <div className="bg-gray-100 h-screen">
      <Header
        nav1={t("nav1")}
        nav2={t("nav2")}
        nav3={t("nav3")}
        nav4={t("nav4")}
        navButton={t("navButton")}
        locale={"/sq/faq"}
        localeEn={"/en/faq"}
        localeTr={"/tr/faq"}
        param={params.locale}
      />
      <p className="roboto700 text-center mt-8 text-3xl mb-8">{p("title")}</p>

      <div className="container items-center mt-4 bg-gray-100 py-4 pb-14  mx-auto ">
        <FaqComp text={p("c1")} desc={p("t1")} />
        <FaqComp text={p("c2")} desc={p("t2")} />
        <FaqComp text={p("c3")} desc={p("t3")} />
        <FaqComp text={p("c4")} desc={p("t4")} />
        <FaqComp text={p("c5")} desc={p("t5")} />
        <FaqComp text={p("c6")} desc={p("t6")} />
        <FaqComp text={p("c7")} desc={p("t7")} />
        <FaqComp text={p("c8")} desc={p("t8")} />
        <FaqComp text={p("c9")} desc={p("t9")} />
        <FaqComp text={p("c10")} desc={p("t10")} />
        <FaqComp text={p("c11")} desc={p("t11")} />
        <FaqComp text={p("c12")} desc={p("t12")} />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
