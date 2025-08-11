"use client";

import React from "react";
import Image from "next/image";
import Gallerypix from "./Gallerypix";

import { GrFavorite } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
const Section = () => {
  return (
    <div id="section" className="p-3 w-full h-screen md:pt-6">
      <div className="flex place-content-between ">
        <div className="pl-2">
          <h2 className="font-bold text-[19px] md:text-[24px]font-ovo">
            M23RB
          </h2>
          <h4 className="font-ovo text-black/60">Riverbank media</h4>
        </div>
        <div className="flex p-2">
          <a>
            <GrFavorite className="h-5 w-6" />
          </a>
          <a href="">
            <BsThreeDotsVertical className="h-5 w-6" />
          </a>
        </div>
      </div>
      <div className=" pt-5  gap-2 ">
        <Gallerypix />
        {/* <Image
          src="/favy.jpg"
          alt=""
          height={350}
          width={350}
          className="object-cover rounded-lg"
        />
        {/* <a href="/favy.jpg" download="favy.jpg">
          <button>Download</button>
        </a> */}
        {/* <Image
          src="/favy3.jpg"
          alt=""
          height={350}
          width={350}
          className="object-cover rounded-lg"
        />{" "}
        */}

        {/* <Image
          src="/favy4.jpg"
          alt=""
          height={350}
          width={350}
          className="object-cover rounded-lg"
        />

        <Image
          src="/favy6.jpg"
          alt=""
          height={350}
          width={350}
          className="object-cover rounded-lg"
        />

        <Image
          src="/favy8.jpg"
          alt=""
          height={350}
          width={350}
          className="object-cover rounded-lg"
        />

        <Image
          src="/favy10.jpg"
          alt=""
          height={350}
          width={350}
          className="object-cover rounded-lg"
        /> */}
      </div>
    </div>
  );
};
export default Section;
