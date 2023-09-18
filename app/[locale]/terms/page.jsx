import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";
import TermsSections from "../components/TermSections";
const Terms = ({ params }) => {
  const t = useTranslations("Header");
  const p = useTranslations("Terms");
  const headerProps = {
    nav1: t("nav1"),
    nav2: t("nav2"),
    nav3: t("nav3"),
    nav4: t("nav4"),
    navButton: t("navButton"),
    locale: "/sq/terms",
    localeEn: "/en/terms",
    localeTr: "/tr/terms",
    param: params.locale,
  };
  const cTexts = [
    p("c1"),
    p("c2"),
    p("c3"),
    p("c4"),
    p("c5"),
    p("c6"),
    p("c7"),
    p("c8"),
    p("c9"),
    p("c10"),
    p("c11"),
    p("c12"),
    p("c13"),
  ];

  const sectionProps = {
    ct1: p("ct1"),
    ct2: p("ct2"),
    ct3: p("ct3"),
    ct4p1: p("ct4p1"),
    ct4p2: p("ct4p2"),
    ct4p3: p("ct4p3"),
    ct4p4: p("ct4p4"),
    ct4p5: p("ct4p5"),
    ct4p6: p("ct4p6"),
    ct4p7: p("ct4p7"),
    ct4p8: p("ct4p8"),
    ct5: p("ct5"),
    ct6: p("ct6"),
    ct7p1: p("ct7p1"),
    ct7p2: p("ct7p2"),
    ct8p1: p("ct8p1"),
    ct8p2: p("ct8p2"),
    ct8p3: p("ct8p3"),
    ct8p4: p("ct8p4"),
    ct8p5: p("ct8p5"),
    ct8p6: p("ct8p6"),
    ct8p7: p("ct8p7"),
    ct9p1: p("ct9p1"),
    ct9p2: p("ct9p2"),
    ct9p3: p("ct9p3"),
    ct9p4: p("ct9p4"),
    ct9p5: p("ct9p5"),
    ct10: p("ct10"),
    ct11: p("ct11"),
    ct12: p("ct12"),
    ct13: p("ct13"),
  };

  return (
    <div className="bg-gray-100  ">
      <Header {...headerProps} />
      <h1 className="text-center text-4xl mt-16 font-semibold heroRoboto">
        {p("title")}
      </h1>

      <TermsSections
        cTexts={cTexts}
        pContent={p("contents")}
        sectionProps={sectionProps}
      />

      <Footer />
    </div>
  );
};

export default Terms;
