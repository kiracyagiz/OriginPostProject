import React from "react";
import { AiFillMail, AiFillYoutube } from "react-icons/ai";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div
      className="  flex flex-col items-center  mb-12 p-8 md:p-0 mx-auto mt-36  gap-y-8"
      id="contact"
    >
      <div className="text-center">
        <h1 className="text-contactH font-semibold mb-2 roboto700">
          {t("title")}
        </h1>
        <p className="text-black tracking-tight roboto400">{t("desc")}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-sm roboto400">
          {t("phone")}
          <span className="font-bold roboto700">+355672014274</span>
        </p>
        <p className="text-sm roboto400">
          Email:<span className="font-bold roboto700">info@pos.al</span>
        </p>
      </div>

      <div className="flex flex-col items-start md:flex-row roboto400 gap-y-4 gap-x-4">
        <Link href={"https://www.youtube.com/channel/UCuR5SmYAHoXONCGUSwlqRSg"}>
          <button className="bg-black text-white flex items-center gap-x-2 px-5 py-2 rounded-lg   hover:scale-105 hover:shadow-md  hover:shadow-black  transition-transform duration-300 ">
            <AiFillYoutube size={25} /> {t("contactYoutube")}
          </button>
        </Link>

        <button className="bg-black w-full md:w-fit text-white flex items-center gap-x-2 px-5 py-2 rounded-lg  hover:scale-105 hover:shadow-md  hover:shadow-black  transition-transform duration-300">
          <AiFillMail size={20} />
          <a href="mailto:info@pos.al?subject=Post.al&body=">
            {t("contactMail")}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
