"use client";

import React from "react";

import { GoArrowDown } from "react-icons/go";
import Section from "./path";

const Header = () => {
  return (
    <div>
      <div
        id="header"
        className='w-full h-screen bg-[url("/rb-n.jpg")] bg-cover bg-center relative'
      >
        <div className="w-100vw h-100vh   bg-white/60 bg-cover   backdrop-blur-[0px] absolute inset-0 left-5 top-5 bottom-5 right-5">
          <div>
            <h4 className="justify-self-center pt-10 font-ovo text-[16px] md:text-[24px]">
              Riverbank media
            </h4>
            <h1 className="justify-self-center font-outfit text-[35px] md:text-[45px] flex content-center font-bold pt-55">
              M25RB
            </h1>
          </div>
          <div className="content-end pt-30">
            <a href="#section">
              <GoArrowDown className="w-6 h-6 justify-self-center" />
            </a>
            <h4 className="font-outfit pt-2 j justify-self-center md:text-[17px]">
              VIEW GALLERY
            </h4>
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default Header;
