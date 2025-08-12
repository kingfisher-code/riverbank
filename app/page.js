"use client";
import { useState } from "react";

// import Header from "./component/page.js";

import Link from "next/link.js";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const isButtonDisabled = inputValue.trim() === "";

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="w-full items-center h-screen bg-[url('/rb-m.jpg')] bg-center bg-cover md:bg-cover ">
      <div
        className=" w-full h-screen bg-black/84 backdrop-blur-[0px]  justify-items-center content-center px-3
      "
      >
        <div className="items-center ">
          <h3 className="text-white justify-self-center text-lg font-outfit tracking-widest text-[15px] md:text-[19px] ">
            RIVERBANK CHURCH
          </h3>
          <h4 className="text-white/50 font-ovo text-lg justify-self-center text-[13px] md:text-[16px]">
            Riverbank Church Media Unit...
          </h4>
        </div>
        <div className="grid  gap-3 mt-6 justify-self-center ">
          <div className="justify-self-center content-center">
            <span className="text-[12px] -tracking-2 md:text-sm font-lato font-ovo text-white/50  ">
              Enter your email to view this
            </span>
            <label className="text-white/70 font-outfit  -tracking-2 ml-2 justify-self-center text-[15px] ">
              collection.
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-white justify-self-center text-gray-900 py-4 pr-30 pl-2 font-outfit border-2 text-[15px] md:text-[16px] border-blue-600  md:py-5"
              type="email"
              value={inputValue}
              placeholder="Email "
              onChange={(event) => setInputValue(event.target.value)}
              required
            />

            <div>
              <Link href="/component">
                <button
                  className="items-center border ml-25  justify-self-center border-white text-white/90 font-ovo px-9 py-3 cursor-pointer mt-7"
                  disabled={isButtonDisabled}
                >
                  Enter
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
