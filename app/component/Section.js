"use client";

import React from "react";
import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
const Section = () => {
  return (
    <div id="section" className="p-3 w-full h-screen md:pt-6">
      <div className="flex place-content-between ">
        <div className="pl-2">
          <h2 className="font-bold text-[19px] md:text-[24px]font-mono">
            M23RB
          </h2>
          <h4 className="font-mono text-black/60">Riverbank media</h4>
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
      <div className="grid grid-cols-2 pt-5  md:grid-cols-4 gap-2 ">
        <Image src="/favy.jpg" alt="" height={350} width={350} />

        <Image src="/favy3.jpg" alt="" height={350} width={350} />
        <Image src="/favy4.jpg" alt="" height={350} width={350} />

        <Image src="/favy6.jpg" alt="" height={350} width={350} />

        <Image src="/favy8.jpg" alt="" height={350} width={350} />

        <Image src="/favy10.jpg" alt="" height={350} width={350} />
      </div>
    </div>
  );
};

export default Section;
