"use effect";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../public/en.webp";

const Language = ({ locale, localeEn, param }) => {
  const [images, setImages] = useState({
    current: "",
    alt: "",
    name: "",
  });
  useEffect(() => {
    const albanianURL =
      "https://landing-dot-pos-al.ew.r.appspot.com/static/1f44ba221b2623e8eb84fc820378aea1/3591c/sq.webp";
    const americanURL =
      "https://landing-dot-pos-al.ew.r.appspot.com/static/745ac48644ea9f3506234651f91c42c2/3591c/en.webp";

    if (param === "sq") {
      setImages({
        current: albanianURL,
        alt: americanURL,
        name: "SQ",
        nameSecond: "EN",
      });
    } else {
      setImages({
        current: americanURL,
        alt: albanianURL,
        name: "EN",
        nameSecond: "SQ",
      });
    }
  });

  return (
    <div className="group ">
      <Link href={locale}>
        <div className="bg-primaryYellow flex items-center gap-x-1 group-hover:mt-12 ">
          <img className="m-2 w-8" src={images.current} alt="#" />
          <p className="text-sm">{images.name}</p>
        </div>
      </Link>
      <Link href={localeEn}>
        <div className="bg-white  items-center gap-x-1 w-20 hidden group-hover:flex ">
          <div className="w-2 h-2 duration-0  absolute ml-6 mb-12 md:top-4.5 bg-white rotate-45"></div>

          <img
            className="m-2 w-8 h-8 object-contain"
            src={images.alt}
            alt="#"
          />
          <p className="text-sm ">{images.nameSecond}</p>
        </div>
      </Link>
    </div>
  );
};

export default Language;
