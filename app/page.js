"use client";
import { useState } from "react";

import Header from "./component/header.js";
import Section from "./component/section";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
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
    <div className="w-full items-center h-screen bg-[url('/favy4.jpg')] bg-center bg-cover md:bg-cover ">
      <div
        className=" w-full h-screen bg-black/84 backdrop-blur-[0px]  justify-items-center content-center px-3
      "
      >
        <div className="items-center ">
          <h3 className="text-white justify-self-center text-lg font-mono tracking-widest text-[15px] md:text-[19px] ">
            RIVERBANK CHURCH
          </h3>
          <h4 className="text-white/50 font-mono text-lg justify-self-center text-[13px] md:text-[16px]">
            Riverbank Church Media Unit...
          </h4>
        </div>
        <div className="grid  gap-3 mt-6 justify-self-center ">
          <div className="justify-self-center content-center">
            <span className="text-[12px] -tracking-2 md:text-sm font-lato font-mono text-white/50  ">
              Enter your email to view this
            </span>
            <label className="text-white/70 font-mono  -tracking-2 ml-2 justify-self-center text-[15px] ">
              collection.
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-white justify-self-center text-gray-900 py-4 pr-30 pl-2 font-mono border-2 text-[15px] md:text-[16px] border-blue-600  md:py-5"
              type="email"
              value={inputValue}
              placeholder="Email "
              onChange={(event) => setInputValue(event.target.value)}
              required
            />

            <div>
              <a href="#header">
                <button
                  className="items-center border ml-25  justify-self-center border-white text-white/90 font-mono px-9 py-3 cursor-pointer mt-7"
                  onClick={toggleVisibility}
                  disabled={isButtonDisabled}
                >
                  Enter
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
      {isVisible && (
        <div className="">
          <Header />
          <Section />
        </div>
      )}
    </div>
  );
}
