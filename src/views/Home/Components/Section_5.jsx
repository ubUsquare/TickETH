import React from "react";

function Section_5() {
  return (
    <div
      id="section-4"
      className="flex mt-10 justify-center gap-7 flex-col h-full  w-full"
    >
      <h1 className="dark:text-white/80 text-2xl font-semibold sm:text-4xl">
        How TickETH Fits into{" "}
        <b className="border-2 sm:text-3xl text-lg lg:shadow-none font-semibold lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
          BitFinity:
        </b>
      </h1>

      <p
        className="text-white text-l text-gray-900/90"
        style={{
          margin: "8px auto",
          letterSpacing: 1,
          lineHeight: "24px",
        }}
      >
        Ticket-ICP is a blockchain-based platform that tokenizes event tickets as
        NFTs, transforming them into secure, verifiable digital assets that can
        be traded and validated on the BitFinity blockchain. This project directly
        aligns with the Real-World Assets (RWA) track by bridging the gap
        between physical event access and digital ownership, leveraging the
        unique capabilities of blockchain technology to enhance security,
        transparency, and efficiency in the event ticketing industry.
      </p>
      <div className="flex justify-between w-full flex-wrap gap-7 p-4">
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100 flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <img
              className="w-14 lg:w-18 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-7.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90  sm:text-lg">
            Tokenization of Real-World Assets:
          </h2>
          <p
            className="dark:text-white/50 sm:text-lg"
            style={{ fontSize: 14, lineHeight: "24px" }}
          >
            Ticket-ICP turns physical event tickets into digital assets (NFTs) on
            the BitFinity blockchain. These NFTs represent ownership of a real-world
            asset—the right to attend an event—ensuring that each ticket is
            unique, verifiable, and tamper-proof.
          </p>
        </div>
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100 flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <img
              className="w-14 lg:w-18 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-1.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90 sm:text-lg">
            Fraud Prevention and Authenticity:
          </h2>
          <p
            className="dark:text-white/50 sm:text-lg"
            style={{ fontSize: 14, lineHeight: "24px" }}
          >
            By leveraging BitFinity's blockchain technology, Ticket-ICP addresses common
            issues in traditional ticketing, such as counterfeiting and
            scalping. The immutability of the blockchain guarantees that each
            ticket's ownership history and authenticity can be easily verified,
            providing a secure and transparent solution for both event
            organisers and attendees.
          </p>
        </div>
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100 flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <img
              className="w-14 lg:w-18 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-5.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90 sm:text-lg">
            Real-Time Validation and Access Control:
          </h2>
          <p
            className="dark:text-white/50 sm:text-lg"
            style={{ fontSize: 14, lineHeight: "24px" }}
          >
            The platform integrates real-time validation mechanisms, allowing
            event organisers to verify ticket ownership at the point of entry.
            This process, facilitated by BitFinity's fast and efficient blockchain
            infrastructure, ensures that only legitimate ticket holders gain
            access to events, enhancing security and user experience.
          </p>
        </div>
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100  flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <img
              className="w-14 lg:w-18 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-6.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90 sm:text-lg">
            Scalable and User-Friendly:
          </h2>
          <p
            className="dark:text-white/50 sm:text-lg"
            style={{ fontSize: 14, lineHeight: "24px", lineHeight: "24px" }}
          >
            Built on BitFinity's scalable and accessible blockchain framework,
            Ticket-ICP offers a user-friendly interface that simplifies the process
            of tokenizing, trading, and validating event tickets. This approach
            makes blockchain technology accessible to a broader audience,
            encouraging the adoption of digital asset management in real-world
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section_5;
