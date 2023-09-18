"use client";

import React, { useState, useEffect } from "react";

const TermsSections = (props) => {
  const { cTexts, pContent, sectionProps } = props;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Function to handle scrolling and update the active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200; // Adjust this value as needed
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:gap-x-32 md:mx-32 mt-16 mb-16 flex flex-col gap-y-8 md:flex-row items-start">
      {/* Left Sidebar */}
      <div className="w-1/4 md:sticky md:top-0 mx-auto items-center md:left-36 bg-gray-100 pt-8">
        <p className="text-xl font-bold mb-4 roboto700">{pContent}</p>
        <div className="flex flex-col w-fit md:gap-y-2 roboto400">
          {cTexts.map((dt, i) => (
            <a
              href={`#${dt}`} // Use '#' to create anchor links to sections
              key={i}
              className={activeSection === dt ? "active" : ""}
            >
              {dt}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 mx-auto items-center flex flex-col gap-y-8 bg-white p-8 mb-24">
        {/* Introduction Section */}
        <section id={cTexts[0]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[0]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct1}</p>
        </section>
        {/* useofwebsite Section */}
        <section id={cTexts[1]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[1]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct2}</p>
        </section>
        {/* IntellectualProperty Section */}
        <section id={cTexts[2]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[2]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct3}</p>
        </section>

        {/* PrivacyPolicy Section */}
        <section id={cTexts[3]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[3]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct4p1}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p2}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p3}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p4}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p5}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p6}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p7}</p>
          <p className="robot-regular text-sm">{sectionProps.ct4p8}</p>
        </section>
        {/* User-responsibility-for-accountacredentials Section */}
        <section id={cTexts[4]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[4]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct5}</p>
        </section>
        {/* userconduct Section */}
        <section id={cTexts[5]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[5]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct6}</p>
        </section>
        {/* Subscriptions-and-financial-responsibilities Section */}
        <section id={cTexts[6]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[6]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct7p1}</p>
          <p className="robot-regular text-sm">{sectionProps.ct7p2}</p>
        </section>
        {/* Live-chat-and-customer-support Section */}
        <section id={cTexts[7]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[7]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct8p1}</p>
          <p className="robot-regular text-sm">{sectionProps.ct8p2}</p>
          <p className="robot-regular text-sm">{sectionProps.ct8p3}</p>
          <p className="robot-regular text-sm">{sectionProps.ct8p4}</p>
          <p className="robot-regular text-sm">{sectionProps.ct8p5}</p>
          <p className="robot-regular text-sm">{sectionProps.ct8p6}</p>
          <p className="robot-regular text-sm">{sectionProps.ct8p7}</p>
        </section>
        {/* User-responsibility-for-fiscalization Section */}
        <section id={cTexts[8]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[8]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct9p1}</p>
          <p className="robot-regular text-sm">{sectionProps.ct9p2}</p>
          <p className="robot-regular text-sm">{sectionProps.ct9p3}</p>
          <p className="robot-regular text-sm">{sectionProps.ct9p4}</p>
          <p className="robot-regular text-sm">{sectionProps.ct9p5}</p>
        </section>
        {/* Limitation-of-liability Section */}
        <section id={cTexts[9]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[9]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct10}</p>
        </section>

        <section id={cTexts[10]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[10]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct11}</p>
        </section>
        {/* Governing-law Section */}
        <section id={cTexts[11]} className="flex flex-col gap-y-2">
          <h1 className="robot-bold text-2xl">{cTexts[11]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct12}</p>
        </section>
        <section id={cTexts[12]} className="flex flex-col gap-y-2 ">
          <h1 className="robot-bold text-2xl">{cTexts[12]}</h1>
          <p className="robot-regular text-sm">{sectionProps.ct13}</p>
        </section>
      </div>
    </div>
  );
};

export default TermsSections;
