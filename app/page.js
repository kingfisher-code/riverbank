"use client";

export default function Home() {
  return (
    <div className="w-full items-center h-screen bg-[url('/favy.jpg')] bg-center bg-cover md:bg-cover ">
      <div
        className=" w-full h-screen bg-black/84 backdrop-blur-[0px]  justify-items-center content-center px-3
      "
      >
        <div className="items-center ">
          <h3 className="text-white justify-self-center text-lg font-mono text-[15px] md:text-[19px] ">
            RIVERBANK CHURCH
          </h3>
          <h4 className="text-white/50 font-mono text-lg justify-self-center text-[13px] md:text-[16px]">
            Riverbank Church Media Unit...
          </h4>
        </div>
        <div className="grid  gap-5 mt-10 justify-self-center ">
          <div className="justify-self-center content-center">
            <label className="text-white/70 font-mono justify-self-center">
              Guest Access.
            </label>
            <span className="text-[12px] md:text-sm font-lato font-mono text-white/50">
              Enter your email to view this collection.
            </span>
          </div>

          <input
            className="bg-white text-gray-900 py-3 pl-2 font-mono border-2 border-blue-600  md:py-5"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <button
            href="#header"
            className="items-center border justify-self-center border-white text-white/90 font-mono px-9 py-3 cursor-pointer mt-7"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
