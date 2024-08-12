import React from "react";
import tickETHBanner from "../../../assets/images/tickETH-Banner.png"

function Section_4() {
  return (
    <div
      id="section-4"
      className="flex z-10 mt-10 justify-center gap-7 lg:gap-20 flex-col h-full w-full"

    >
      <img
        src="https://opne9reactnext.vercel.app/_next/static/media/bg-home2.d35f9112.png"
        className="left-0 top-[79pc] absolute"
        alt=""
      />
      <div className=" relative z-10  text-center"       style={{margin:'40px 0 25px'}}>
        <b className="text-white text-2xl sm:text-2xl lg:border-0 lg:shadow-none lg:shadow-purple-800/80 border-2 shadow-lg shadow-purple-800/80 rounded-lg text-white/90 self-center lg:self-start font-semibold leading-tight p-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
          Coming Soon...
        </b>
        <h1
          className="text-white text-4xl sm:text-5xl text-gray-900/90 font-semibold leading-tight lg:text-center text-center"
          style={{ lineHeight: "50px", marginTop: 40, letterSpacing: 1 }}
        >
          Get Notified when we Launch.
        </h1>
        <p
          className="text-white text-xl text-gray-900/90"
          style={{ marginTop: 30 }}
        >
          From automation of people processes to creating on <br />
          engaged and driven culture.
        </p>
        <img src={tickETHBanner} alt="" className="banner-image" />
      </div>
    </div>
  );
}

export default Section_4;
