import React from "react";
import Nft from "../../../assets/images/dua-lipa.png";
import Line from "../../../assets/images/line.svg";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import eth from "../../../assets/images/eth.svg";
import nft from "../../../assets/images/nft.svg";
import metaHome from "../../../assets/images/metamaskHome.svg";


function Section_1() {
  document.addEventListener("mousemove", (e) => {
    var items = document.querySelectorAll("h1,#NFTimage div");
    for (let index = 0; index < items.length; index++) {
      items[index].style.transform = `translateY(${
        e.clientY / 100
      }px) translateX(${(items[index].dataset.move * e.clientX) / 100}px)`;
    }
  });

  return (
    <div
      id="section-1"
      className="flex mt-20 items-center lg:h-[40pc]  gap-5 lg:flex-row h-full flex-col"
    >
      <img
        src="https://opne9reactnext.vercel.app/_next/static/media/bg-home2.d35f9112.png"
        className="left-0 top-[15pc] absolute"
        alt=""
      />
      <div
        id="side-left"
        className="flex flex-col sm:px-0 flex-1 relative z-10 h-full justify-around gap-6 lg:gap-0 lg:text-start text-center"
      >
        <img
          src={eth}
          className="xs:hidden block absolute left-[70%] -z-10 w-14 top-[-2pc] rotate-12"
          alt=""
        />
        <img
          src={nft}
          className=" xs:hidden block absolute left-[70%] -z-10 w-[6pc] top-[4pc] rotate-12"
          alt=""
        />
        <img
          src={metaHome}
          className=" xs:hidden block absolute  w-[6pc] top-[-4pc] -z-10 -rotate-12"
          alt=""
        />
        <h1 className="text-white text-4xl sm:text-5xl text-gray-900/90 font-semibold leading-tight lg:text-start text-center" style={{lineHeight:"55px"}}>
        Your Ticket to<br />Secure, Transparent, and<br/> Fraud-Free Events <br />
        </h1>
        <b className="text-white text-2xl sm:text-5xl lg:border-0 lg:shadow-none lg:shadow-purple-800/80 border-2 shadow-lg shadow-purple-800/80 rounded-lg text-white/90 self-center lg:self-start font-semibold leading-tight p-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
        Real-World Assets
        </b>
        <p className="text-white text-sm sm:text-base text-gray-900/90">
        Ticket-ICP is a blockchain-based platform that tokenizes event tickets as NFTs,  
          <br className="sm:flex hidden" />
          transforming them into secure, verifiable digital assets that can be traded
          <br className="sm:flex hidden" /> and validated on the BitFinity blockchain.
        </p>
        <div
          id="buttons"
          className="flex gap-3 lg:self-start self-center w-full sm:w-max "
        >
          <Link
            type="button"
            className="py-2.5 px-5 flex-1  text-sm font-medium flex items-center gap-4 justify-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-tr from-purple-800 to-purple-500 dark:hover:bg-purple-700 text-white/90"
            to="/explore"
          >
            Book Event
          </Link>
        </div>
        <div
          id="stats"
          className="flex flex-row justify-evenly lg:justify-start lg:gap-14"
        >
          <div className="flex flex-col gap-2 justify-between">
            <h2 className="dark:text-white text-gray-800/90 font-semibold text-xl sm:text-[2rem]">
              35+
            </h2>
            <span className="dark:text-white/70 text-gray-700/90 text-sm sm:text-[1rem]">
              Concerts
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <h2 className="dark:text-white text-gray-800/90 font-semibold text-xl sm:text-[2rem]">
              3k+
            </h2>
            <span className="dark:text-white/70 text-gray-700/90 text-sm sm:text-[1rem]">
              Tickets
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <h2 className="dark:text-white text-gray-800/90 font-semibold text-xl sm:text-[2rem]">
              1k +
            </h2>
            <span className="dark:text-white/70 text-gray-700/90 text-sm sm:text-[1rem]">
              Assets
            </span>
          </div>
        </div>
      </div>
      <div
        id="side-right "
        className="flex-1 h-[29pc] mb-10 flex lg:items-center items-start relative justify-center"
      >
        <div
          id="NFTimage"
          className="relative z-10 scale-[75%] sm:scale-[100%] -skew-sx-12"
        >
          <div
            data-move="1"
            id="float-4"
            style={{ top: "-2pc" }}
            className="absolute sm:left-16 border-[1px] border-darkBlue-100/20 rounded-full backdrop-blur-lg   -z-2 sm:h-[7pc] h-[6pc] sm:w-[7pc] w-[6pc] flex flex-col dark:bg-darkBlue-400/30 p-3 items-center justify-center"
          >
            <span className="font-semibold text-white/80 sm:text-base text-sm">
              Ticket NFT
            </span>
            <p className="text-white/60">Available</p>
          </div>
          <div data-move="2">
            <img
              src={Nft}
              className=" relative w-[26pc]"
              alt=""
              style={{ margin: "30px 45px" }}
            />
          </div>
          <div
            data-move="3"
            id="float-3"
            className="absolute -top-10 sm:-right-6 -right-12 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg w-44 flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
          >
            <h2 className="font-semibold text-white">Book NOW !</h2>
            <span className="text-white/60">Latest Concerts</span>
          </div>
          <div
            data-move="-1"
            id="float-2"
            className="absolute sm:bottom-20 bottom-16 sm:-right-20 -right-24 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg dark:bg-darkBlue-400/30 p-2 w-48 gap-3  flex justify-start"
          >
            <div className="flex flex-col gap-1">
              <img src={logo} className="w-10" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-white">DUA LIPA #9383</h2>
              <span className="text-white/60">kunal lo.. </span>
            </div>
          </div>

          <div
            data-move="4"
            id="float-5"
            className=" right-3 -bottom-10 w-[10pc] sm:-bottom-12 absolute"
          >
            <img src={Line} alt="" />
          </div>
          <div
            data-move="4"
            id="float-5"
            className="absolute sm:-bottom-0 -bottom-0 left- right-2 sm:right-[9pc] border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg  -z-10 sm:h-[17pc] h-[10pc] sm:w-[29pc] w-[20pc] flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
          />
        </div>
        <div className="bg z-[1] bg-gradient-to-r from-pink-800 absolute h-64 w-64 blur-[10pc] opacity-[100%]" />
        <div className="h-[10pc] w-44 bg-gradient-to-r from-pink-800 blur-[10pc] absolute right-10 bottom-0 opacity-[20%]" />
      </div>
    </div>
  );
}

export default Section_1;
