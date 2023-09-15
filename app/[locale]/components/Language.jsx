import React from "react";
import Link from "next/link";
const Language = ({ locale, localeEn }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="group inline-block relative">
        <Link href={locale}>
          <button className="bg-primaryYellow text-gray-700 font-semibold  px-4  rounded inline-flex items-center">
            <img
              className="m-2"
              src="https://landing-dot-pos-al.ew.r.appspot.com/static/1f44ba221b2623e8eb84fc820378aea1/3591c/sq.webp"
              alt=""
            />
            <p className="text-sm">SQ</p>
          </button>
        </Link>
        <Link href={localeEn}>
          <div className="absolute hidden bg-white p-2 text-center items-center ml-4 group-hover:block">
            <div className="flex gap-x-3 items-center bg-white">
              <span className=" m-2 gap-x-4 bg-white">
                <img
                  src="	https://landing-dot-pos-al.ew.r.appspot.com/static/745ac48644ea9f3506234651f91c42c2/3591c/en.webp"
                  alt=""
                  className="w-8 "
                />
                <p className="text-sm ">EN</p>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Language;
