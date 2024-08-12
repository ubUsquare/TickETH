import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import {
  ProductNFT,
  SkeletonProductNFT,
} from "../../../components/UiComponents/ProductNFT";

function ShopNFTs({ filters }) {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [limit, setLimit] = useState(10);
  const [NFTsItems, setNFTsItems] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    filters.set("search", "");
    filters.set("category", "");
  }, []);



  const loadMore = () => {
    setLimit(limit + 5);
  };

  return (
    <>
      <LoadingBar
        color="#f00076"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div
        id="all"
        className="flex relative z-10 flex-wrap gap-5 justify-evenly"
      >
        {/* {IsLoading ? (
          NFTsItems.length > 0 ? (
            NFTsItems.map((item) => (           ))
          ) : (
            <div className="h-[30pc] flex justify-center items-center">
              <Product404
                message="NFTs not found"
                subMessage="reload page or wait for fetching !"
              />
            </div>
          )
        ) : (
          DummySkeletonData.map((item) => <SkeletonProductNFT key={item} />)
        )} */}
              <ProductNFT button="Book Now" link="/nft/" />
 
      </div>

    </>
  );
}

export default ShopNFTs;
