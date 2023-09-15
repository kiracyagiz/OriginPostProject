import Link from "next/link";
import { useEffect, useState } from "react";
import tr from "../../../public/tr.png";
import sq from "../../../public/sq.png";
import en from "../../../public/en.png";

import Image from "next/image";

const Language = ({ locale, localeEn, param }) => {
  const [item, setItems] = useState({
    current: "",
    alt: "",
  });
  const [images, setImages] = useState({
    current: "",
    alt: "",
    name: "",
    nameSecond: "",
  });

  useEffect(() => {
    const isAlbanian = param === "sq";

    setImages({
      current: isAlbanian ? sq : en,
      alt: isAlbanian ? en : sq,
      name: isAlbanian ? "SQ" : "EN",
      nameSecond: isAlbanian ? "EN" : "SQ",
    });
  }, [param]);

  useEffect(() => {
    if (param == "sq") {
      setItems({
        current: locale,
        alt: localeEn,
      });
    } else {
      setItems({
        current: localeEn,
        alt: locale,
      });
    }
  }, [param]);

  return (
    <div className="group ">
      <Link href={item.current}>
        <div className="bg-primaryYellow flex items-center gap-x-1 md:group-hover:mt-20 ">
          <Image className="m-2 w-8" src={images.current} />
          {/* <img className="m-2 w-8" src={images.current} alt="#" /> */}
          <p className="text-sm">{images.name}</p>
        </div>
      </Link>
      <Link href={item.alt}>
        <div className="bg-white  items-center gap-x-1 w-20 hidden group-hover:flex rounded-lg ">
          <div className="w-2 h-2 duration-0  absolute ml-6 mb-12 md:top-4.5 bg-white rotate-45"></div>
          <Image className="m-2 w-8" src={images.alt} />

          {/* <img
            className="m-2 w-8 h-8 object-contain"
            src={images.alt}
            alt="#"
          /> */}
          <p className="text-sm ">{images.nameSecond}</p>
        </div>
      </Link>
      <div className="bg-white  items-center gap-x-1 w-20 hidden  py-2 group-hover:flex  rounded-lg">
        <Image src={tr} className="w-8 ml-2.5" />
        <p className="text-sm ">{images.nameSecond}</p>
      </div>
    </div>
  );
};

export default Language;
