import React, { useState, useEffect } from "react";
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { ErrorToast } from "../../../app/Toast/Error";
import { ethereumUsd } from "../../../hooks/useEtherUsdPrice";
import { Tooltip } from "flowbite-react";

function NftBuy({ price, nftId, ComponentLoad, isListed }) {
  const [usdPrice, setUsdPrice] = useState(0);

  useEffect(() => {
    const converting = async () => {
      setUsdPrice(await ethereumUsd());
    };
    converting();
  }, []);



  return (
    <div className="flex flex-col gap-3 rounded-lg p-4 flex-aut border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70 sm:w-auto w-full">
      <Toaster position="leftbottom" />
      <span className="dark:text-white/80 sm:text-base text-sm font-semibold">
        Current Price
      </span>
      <div className="flex gap-3 items-baseline">
        <Tooltip
          className="dark:bg-darkBlue-400 text-pink-500"
          theme={{
            arrow: {
              style: {
                dark: "bg-gray-900 dark:bg-darkBlue-400",
                light: "bg-white",
              },
            },
          }}
          content={`1.24ETH`}
        >
          <b className="text-2xl cursor-pointer sm:text-5xl dark:text-white/90">
            ~{Number("1.23").toFixed(4)} ETH
          </b>
        </Tooltip>
        <Tooltip
          className="dark:bg-darkBlue-400 text-pink-500"
          theme={{
            arrow: {
              style: {
                dark: "bg-gray-900 dark:bg-darkBlue-400",
                light: "bg-white",
              },
            },
          }}
          content={`$286 $`}
        >
          <span className="dark:text-white/60 cursor-pointer text-sm sm:text-base">
            (${Number(256).toFixed(1)})
          </span>
        </Tooltip>
      </div>
      <b className="dark:text-white/50 font-normal text-sm sm:text-base">
        Rare NFT with Best Price!
      </b>
      {isListed ? (
        <button
          type="button"
          className="py-2.5 w-full px-5 text-sm sm:text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          // onClick={}
        >
          Buy now for
          <div className="flex gap-2 items-center">
            <FaEthereum /> {Number(price).toFixed(4)} ETH
          </div>
        </button>
      ) : (
        <button
          onClick={() => ErrorToast("This NFT is not listed")}
          type="button"
          className="py-2.5 w-full px-5 text-sm sm:text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 dark:text-gray-100/50 border-none bg-gradient-to-r from-gray-700 to-gray-600 cursor-not-allowed"
        >
          This NFT is not listed
        </button>
      )}
    </div>
  );
}

export default NftBuy;
