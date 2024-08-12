import React, { useEffect, useState } from "react";
import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home/Home";
import Footer from "./components/Footer";
import Explore from "./views/Explore/Explore";
import ShopNFTs from "./views/Explore/Components/ShopNFTs";
import PrivacyPolicy from "./views/Other/PrivacyPolicy";
import Nft from "./views/ProductOverview/Nft";
import Cart from "./views/Cart/Cart";
import MyNFT from "./views/MyNFT/myNft";
import IdeationPage from "./views/Other/IdeationPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center min-h-full max-w-full dark:bg-darkBlue-700">
        <div className="container w-full h-full">
          <Navbar /> <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />}>
              <Route index element={<ShopNFTs />} />
              <Route path="collections" />
            </Route>
            <Route path="/nft/:id" element={<Nft />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/your-nft" element={<MyNFT />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ideation-page" element={<IdeationPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
