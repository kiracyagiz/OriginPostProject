import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";

const Terms = ({ params }) => {
  const t = useTranslations("Header");
  const p = useTranslations("Terms");
  return (
    <div className="bg-gray-100  ">
      <Header
        nav1={t("nav1")}
        nav2={t("nav2")}
        nav3={t("nav3")}
        nav4={t("nav4")}
        navButton={t("navButton")}
        locale={"/terms"}
        localeEn={"/terms"}
        localeTr={"/terms"}
        param={params.locale}
      />
      <h1 className="text-center text-4xl mt-16 font-semibold heroRoboto">
        {p("title")}
      </h1>

      <div className=" md:gap-x-32 md:mx-32 mt-16  mb-16 flex flex-col gap-y-8 md:flex-row items-start ">
        <div className="w-1/4 md:sticky md:top-0 mx-auto items-center md:left-36 bg-gray-100 pt-8">
          <p className="text-xl font-bold mb-4 roboto700">{p("contents")}</p>
          <div className="flex flex-col w-fit md:gap-y-2 active">
            <a href="#Introduction">{p("c1")}</a>
            <a href="#useofwebsite">{p("c2")}</a>
            <a href="#IntellectualProperty">{p("c3")}</a>
            <a href="#PrivacyPolicy">{p("c4")}</a>
            <a href="#User-responsibility-for-accountacredentials">{p("c5")}</a>
            <a href="#userconduct">{p("c6")}</a>
            <a href="#Subscriptions-and-financial-responsibilities">
              {p("c7")}
            </a>
            <a href="#Live-chat-and-customer-support">{p("c8")}</a>
            <a href="#User-responsibility-for-fiscalization">{p("c9")}</a>
            <a href="#Limitation-of-liability">{p("c10")}</a>
            <a href="#Modifications">{p("c11")}</a>
            <a href="#Governing-law">{p("c12")}</a>
            <a href="#Contact-us">{p("c13")}</a>
          </div>
        </div>

        <div className="w-4/5 mx-auto items-center flex flex-col gap-y-8  bg-white p-8 ">
          <section id="Introduction" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c1")}</h1>
            <p className="robot-regular text-sm">{p("ct1")}</p>
          </section>
          <section id="useofwebsite" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c2")}</h1>
            <p className="robot-regular text-sm">{p("ct2")}</p>
          </section>
          <section id="IntellectualProperty" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c3")}</h1>
            <p className="robot-regular text-sm">{p("ct3")}</p>
          </section>
          <section id="PrivacyPolicy" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c4")}</h1>
            <p className="robot-regular text-sm">{p("ct4p1")}</p>
            <p className="robot-regular text-sm">{p("ct4p2")}</p>
            <p className="robot-regular text-sm my-2">{p("ct4p3")}</p>
            <p className="robot-regular text-sm my-2">{p("ct4p4")}</p>

            <p className="robot-regular text-sm my-2">{p("ct4p5")}</p>
            <p className="robot-regular text-sm my-2">{p("ct4p6")}</p>
            <p className="robot-regular text-sm my-2">{p("ct4p7")}</p>
            <p className="robot-regular text-sm my-2">{p("ct4p8")}</p>
          </section>
          <section
            id="User-responsibility-for-accountacredentials"
            className="flex flex-col gap-y-2"
          >
            <h1 className="robot-bold text-2xl">{p("c5")}</h1>
            <p className="robot-regular text-sm">{p("ct5")}</p>
          </section>
          <section id="userconduct" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c6")}</h1>
            <p className="robot-regular text-sm">{p("ct6")}</p>
          </section>
          <section
            id="Subscriptions-and-financial-responsibilities"
            className="flex flex-col gap-y-2"
          >
            <h1 className="robot-bold text-2xl">{p("c7")}</h1>
            <p className="robot-regular text-sm mb-2">{p("ct7p1")}</p>
            <p className="robot-regular text-sm ">{p("ct7p2")}</p>
          </section>
          <section
            id="Live-chat-and-customer-support"
            className="flex flex-col gap-y-2"
          >
            <h1 className="robot-bold text-2xl">{p("c8")}</h1>
            <p className="robot-regular text-sm">{p("ct8p1")}</p>
            <p className="robot-regular text-sm">{p("ct8p2")}</p>
            <p className="robot-regular text-sm">{p("ct8p3")}</p>
            <p className="robot-regular text-sm">{p("ct8p4")}</p>
            <p className="robot-regular text-sm">{p("ct8p5")}</p>
            <p className="robot-regular text-sm">{p("ct8p6")}</p>
            <p className="robot-regular text-sm">{p("ct8p7")}</p>
          </section>
          <section
            id="User-responsibility-for-fiscalization"
            className="flex flex-col gap-y-2"
          >
            <h1 className="robot-bold text-2xl">{p("c9")}</h1>
            <p className="robot-regular text-sm">{p("ct9p1")}</p>
            <p className="robot-regular text-sm">{p("ct9p2")}</p>
            <p className="robot-regular text-sm">{p("ct9p3")}</p>
            <p className="robot-regular text-sm">{p("ct9p4")}</p>
            <p className="robot-regular text-sm">{p("ct9p5")}</p>
          </section>
          <section
            id="Limitation-of-liability"
            className="flex flex-col gap-y-2"
          >
            <h1 className="robot-bold text-2xl">{p("c10")}</h1>
            <p className="robot-regular text-sm">{p("ct10")}</p>
          </section>
          <section id="Modifications" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c11")}</h1>
            <p className="robot-regular text-sm">{p("ct11")}</p>
          </section>
          <section id="Governing-law" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c12")}</h1>
            <p className="robot-regular text-sm">{p("ct12")}</p>
          </section>
          <section id="Contact-us" className="flex flex-col gap-y-2">
            <h1 className="robot-bold text-2xl">{p("c13")}</h1>
            <p className="robot-regular text-sm">{p("ct13")}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
