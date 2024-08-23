import React, { useEffect, useState } from 'react'
import { goldTicketsOwned, platinumTicketsOwned, silverTicketsOwned } from '../../web3Service/Web3Integration'
import { useSelector } from 'react-redux';
import platinum from "../../assets/images/PLATINUM.jpg";
import gold from "../../assets/images/GOLD.jpg";
import silver from "../../assets/images/SILVER.jpg";
import demoUserAvatar from "../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";

const MyNFT = () => {
    const AccountState = useSelector((state) => state.EthAccountStates);

    const [platinumCardData, setPlatinumCardData] = useState(null)
    const [goldCardData, setGoldCardData] = useState(null)
    const [silverCardData, setSilverCardData] = useState(null)

    // const platinumCardImages = Array(platinumCardData).fill(platinum);
    // const goldCardImages = Array(goldCardData).fill(gold);
    // const silverCardImages = Array(silverCardData).fill(silver);

    useEffect(() => {
        PlatniumTicket();
        GoldTicket();
        SilverTicket();
    }, [])


    const PlatniumTicket = async () => {
        try {
            let accAddress = AccountState?.account;
            const PlatniumTicketRes = await platinumTicketsOwned(accAddress, "0xeaDD94d1Aac3378875b11C3402564D67c4a3BFA4")
            console.log("PlatniumTicketRes", Number(PlatniumTicketRes))
            setPlatinumCardData(Number(PlatniumTicketRes))
        } catch (error) {
            console.log("error in PlatniumTicket", error)
            return
        }
    }
    const GoldTicket = async () => {
        try {
            let accAddress = AccountState?.account;
            const GoldTicketRes = await goldTicketsOwned(accAddress, "0xeaDD94d1Aac3378875b11C3402564D67c4a3BFA4")
            console.log("GoldTicketRes", Number(GoldTicketRes))
            setGoldCardData(Number(GoldTicketRes))
        } catch (error) {
            console.log("error in GoldTicket", error)
            return
        }
    }
    const SilverTicket = async () => {
        try {
            let accAddress = AccountState?.account;
            const SilverTicketRes = await silverTicketsOwned(accAddress, "0xeaDD94d1Aac3378875b11C3402564D67c4a3BFA4")
            console.log("SilverTicketRes", Number(SilverTicketRes))
            setSilverCardData(Number(SilverTicketRes))
        } catch (error) {
            console.log("error in SilverTicket", error)
            return
        }
    }
    return (
        <div
            id="section-1"
            className="flex flex-col justify-around px-4 mt-7 "
            style={{ minHeight: "85vh" }}
        >
            <img
                src="https://opne9reactnext.vercel.app/_next/static/media/bg-home2.d35f9112.png"
                className="left-0 top-[15pc] absolute"
                alt=""
            />
            <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold" style={{ textAlign: 'center', margin: "50px auto 30px" }}>
                Your  <b className="border-2 sm:text-2xl text-lg lg:shadow-none font-semibold lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
                    Tickets
                </b>
            </h2>
            <div className="flex relative z-10 flex-wrap gap-5 justify-evenly">
                {platinumCardData &&

                    <Link
                        to=""
                        key="1"
                        className="border-[1px] m-2 border-gray-700/20 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[27pc] bg-darkBlue-600 p-3"

                    >
                        <div className="flex gap-3 items-center justify-between">
                            <div className='flex flex-row justify-between align-middle'>
                                <img
                                    className="w-11 rounded-full bg-darkBlue-300 h-11"
                                    src={demoUserAvatar}
                                    alt=""
                                    style={{ marginRight: 10 }}
                                />
                                <div className="flex flex-col">

                                    <div>
                                        <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
                                            Ticket Type :
                                        </span>{" "}
                                        <Link
                                            to="/explore"
                                            className="text-white/90 rounded-md w-[9pc] h-[1.5pc] hover:text-pink-500 hover:scale-[99%] transition-all line-clamp-1 text-sm font-normal"
                                        >
                                            PLATINUM
                                        </Link>
                                    </div>



                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p className="text-white text-sm sm:text-base text-gray-900/90" style={{ fontSize: 24, fontWeight: 700, textAlign: 'center' }}>
                                    {platinumCardData}

                                </p>
                                <p className="text-white/50 text-xs text-sm sm:text-base text-gray-900/90" >
                                    Tickets
                                </p>
                            </div>
                        </div>
                        <div className="border-[1px] relative z-30 hover:shadow-xl shadow-darkBlue-700 hover:-translate-y-1  border-gray-700/70 h-[17pc] bg-darkBlue-600/40 transition-all w-full overflow-hidden rounded-xl flex items-center justify-center">
                            <img
                                className="h-full absolute z-10 cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={platinum}
                                alt=""
                            />
                            <img
                                className="w-full blur-sm h-full absolute cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={platinum}
                                alt=""
                            />
                        </div>

                    </Link>

                }
                {goldCardData &&

                    <Link
                        to=""
                        key="1"
                        className="border-[1px] m-2 border-gray-700/20 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[27pc] bg-darkBlue-600 p-3"

                    >
                        <div className="flex gap-3 items-center justify-between">
                            <div className='flex flex-row justify-between align-middle'>
                                <img
                                    className="w-11 rounded-full bg-darkBlue-300 h-11"
                                    src={demoUserAvatar}
                                    alt=""
                                    style={{ marginRight: 10 }}
                                />
                                <div className="flex flex-col">

                                    <div>
                                        <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
                                            Ticket Type :
                                        </span>{" "}
                                        <Link
                                            to="/explore"
                                            className="text-white/90 rounded-md w-[9pc] h-[1.5pc] hover:text-pink-500 hover:scale-[99%] transition-all line-clamp-1 text-sm font-normal"
                                        >
                                            GOLD
                                        </Link>
                                    </div>



                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p className="text-white text-sm sm:text-base text-gray-900/90" style={{ fontSize: 24, fontWeight: 700, textAlign: 'center' }}>
                                    {goldCardData}

                                </p>
                                <p className="text-white/50 text-xs text-sm sm:text-base text-gray-900/90" >
                                    Tickets
                                </p>
                            </div>
                        </div>
                        <div className="border-[1px] relative z-30 hover:shadow-xl shadow-darkBlue-700 hover:-translate-y-1  border-gray-700/70 h-[17pc] bg-darkBlue-600/40 transition-all w-full overflow-hidden rounded-xl flex items-center justify-center">
                            <img
                                className="h-full absolute z-10 cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={gold}
                                alt=""
                            />
                            <img
                                className="w-full blur-sm h-full absolute cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={gold}
                                alt=""
                            />
                        </div>

                    </Link>
                }
                {silverCardData &&

                    <Link
                        to=""
                        key="1"
                        className="border-[1px] m-2 border-gray-700/20 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[27pc] bg-darkBlue-600 p-3"

                    >
                        <div className="flex gap-3 items-center justify-between">
                            <div className='flex flex-row justify-between align-middle'>
                                <img
                                    className="w-11 rounded-full bg-darkBlue-300 h-11"
                                    src={demoUserAvatar}
                                    alt=""
                                    style={{ marginRight: 10 }}
                                />
                                <div className="flex flex-col">

                                    <div>
                                        <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
                                            Ticket Type :
                                        </span>{" "}
                                        <Link
                                            to="/explore"
                                            className="text-white/90 rounded-md w-[9pc] h-[1.5pc] hover:text-pink-500 hover:scale-[99%] transition-all line-clamp-1 text-sm font-normal"
                                        >
                                            SILVER
                                        </Link>
                                    </div>



                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p className="text-white text-sm sm:text-base text-gray-900/90" style={{ fontSize: 24, fontWeight: 700, textAlign: 'center' }}>
                                    {silverCardData}

                                </p>
                                <p className="text-white/50 text-xs text-sm sm:text-base text-gray-900/90" >
                                    Tickets
                                </p>
                            </div>
                        </div>
                        <div className="border-[1px] relative z-30 hover:shadow-xl shadow-darkBlue-700 hover:-translate-y-1  border-gray-700/70 h-[17pc] bg-darkBlue-600/40 transition-all w-full overflow-hidden rounded-xl flex items-center justify-center">
                            <img
                                className="h-full absolute z-10 cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={silver}
                                alt=""
                            />
                            <img
                                className="w-full blur-sm h-full absolute cw-max !min-w-fit group-hover:scale-125 transition-all"
                                src={silver}
                                alt=""
                            />
                        </div>

                    </Link>
                }
            </div>
        </div>
    )
}

export default MyNFT
