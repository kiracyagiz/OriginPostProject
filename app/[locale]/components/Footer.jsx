import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-32 mt-12 bg-black flex items-center  md:justify-between">
      <div className="mx-auto flex flex-col md:flex-row gap-x-96  gap-y-4 md:text-center justify-between">
        <div className="text-primaryYellow text-2xl font-semibold">
          <p>Pos.</p>
        </div>

        <div className="list-none text-semibold text-sm md:text-md flex  gap-x-4 md:gap-x-16 text-primaryYellow">
          <li>HOME</li>

          <Link href={"/terms"}>
            <li>TERMS</li>
          </Link>
          <li>ABOUT</li>
          <li>FAQ</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
