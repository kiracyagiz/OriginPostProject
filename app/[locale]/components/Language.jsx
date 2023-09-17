import Link from "next/link";
import { useEffect, useState } from "react";
import tr from "../../../public/turkey.png";
import sq from "../../../public/sq.png";
import en from "../../../public/en.png";

import Image from "next/image";

const Language = ({ locale, localeEn, param, localeTr }) => {
  const [item, setItems] = useState({
    current: "",
    alt: "",
    last: "",
  });
  const [images, setImages] = useState({
    current: "",
    alt: "",
    last: "",
    name: "",
    nameSecond: "",
    nameThird: "",
  });

  useEffect(() => {
    const isAlbanian = param === "sq";
    const isTurkish = param === "tr";
    const isEnglish = param === "en";

    setImages({
      current: isAlbanian ? sq : isTurkish ? tr : isEnglish ? en : "",
      alt: isAlbanian ? en : isTurkish ? sq : isEnglish ? tr : "",
      last: isAlbanian ? tr : isTurkish ? en : isEnglish ? sq : "",

      name: isAlbanian ? "SQ" : isTurkish ? "TR" : isEnglish ? "EN" : "",
      nameSecond: isAlbanian ? "EN" : isTurkish ? "SQ" : isEnglish ? "TR" : "",
      nameThird: isAlbanian ? "TR" : isTurkish ? "EN" : isEnglish ? "SQ" : "",
    });
  }, [param]);

  useEffect(() => {
    if (param === "sq") {
      setItems({
        current: locale,
        alt: localeEn,
        last: "tr",
      });
    } else if (param === "en") {
      setItems({
        current: localeEn,
        alt: "tr",
        last: locale,
      });
    } else {
      setItems({
        current: "tr",
        alt: locale,
        last: localeEn,
      });
    }
  }, [param]);

  return (
    <div className="group ">
      <Link href={item.current}>
        <div className="bg-primaryYellow flex items-center gap-x-1 md:group-hover:mt-20 ">
          <Image className="m-2 w-8" src={images.current} alt="image" />
          <p className="text-sm">{images.name}</p>
        </div>
      </Link>
      <Link href={item.alt}>
        <div className="bg-white  items-center gap-x-1 w-20 hidden group-hover:flex rounded-t-lg ">
          <div className="w-2 h-2 duration-0  absolute ml-6 mb-12 md:top-4.5 bg-white rotate-45"></div>
          <Image className="m-2 w-8" src={images.alt} alt="image" />
          <p className="text-sm ">{images.nameSecond} </p>
        </div>
      </Link>
      <Link href={item.last}>
        <div className="bg-white  items-center gap-x-1 w-20 hidden  py-2 group-hover:flex rounded-b-lg">
          <Image src={images.last} className="w-8 ml-2.5" alt="image" />
          <p className="text-sm ">{images.nameThird}</p>
        </div>
      </Link>
    </div>
  );
};

export default Language;
