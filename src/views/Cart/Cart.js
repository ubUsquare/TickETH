import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart'
import UserAvatar from "../../assets/images/avatar.jpg";
import { mintTicket } from '../../web3Service/Web3Integration';
import { useSelector } from "react-redux";
import Web3 from "web3";
import { SuccessToast } from "../../app/Toast/Success";
import { ErrorToast } from "../../app/Toast/Error";
import { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext)
    const AccountState = useSelector((state) => state.EthAccountStates);
    console.log("cartItems", cartItems)

    const [cartState, setCartState] = useState([]);


    useEffect(() => {
        const initialCartState = cartItems.map(item => ({ id: item.id, quantity: item.quantity }));
        console.log('Initial Cart State:', initialCartState); // Logging the initialCartState
        setCartState(initialCartState);
    }, [cartItems]);


    const EventTicketMint = async () => {

        try {
            let contAddr = "0xeaDD94d1Aac3378875b11C3402564D67c4a3BFA4";
            let accAddress = AccountState?.account;
            const web3 = new Web3(window.ethereum);

            for (const item of cartState) {
                let amount = "";
                let cardType = "";
                let typeName = "";
                let cardQuantity = item.quantity;


                switch (item.id) {
                    case 1:
                        amount = "0.003";
                        cardType = "1";
                        typeName = "Platinum"
                        break;
                    case 2:
                        amount = "0.002";
                        cardType = "2";
                        typeName = "Gold"

                        break;
                    case 3:
                        amount = "0.001";
                        cardType = "3";
                        typeName = "Silver"

                        break;
                    default:
                        console.log(`Unknown id: ${item.id}`);
                        continue;
                }

                let amountInWei = web3.utils.toWei(cardQuantity * amount, "ether");
                const mintRes = await mintTicket(cardType, cardQuantity, accAddress, contAddr, amountInWei);
                console.log(`Minted ticket for cardType: ${cardType}, Quantity: ${cardQuantity}, Result:`, mintRes);
                if (mintRes) {
                    SuccessToast(`Minted  ${cardQuantity} ${typeName} ticket   `);
                } else {
                    ErrorToast("Error in transaction; Please try again 💔");

                }
            }
            SuccessToast(`You can view your NFTs here  `);
navigate("/your-nft")
            
        } catch (e) {
            ErrorToast("Error in transaction; Please try again 💔");
            console.log("Error while integration", e);
            return;
        }
    }

    return (
        <>
            <div
                id="section-1"
                className="flex flex-col gap-3 w-full h-[9pc] sm:h-[15pc] items-center justify-center "
                style={{ minHeight: "85vh" }}
            >
                <Toaster position="leftbottom" />
                {/* <img
                    src="https://opne9reactnext.vercel.app/_next/static/media/bg-home2.d35f9112.png"
                    className="left-0 top-[15pc] absolute"
                    alt=""
                /> */}
                <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
                    Cart  <b className="border-2 sm:text-2xl text-lg lg:shadow-none font-semibold lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
                        Tickets
                    </b>
                </h2>
                <div className="flex flex-col gap-4" style={{ marginTop: 50 }}>
                    {cartItems?.map((item) => (
                        <div className="flex justify-between items-center" >

                            <div className="flex gap-4">
                                <img src={UserAvatar} alt={item?.name} className="rounded-md h-24" />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg text-white font-bold">{item?.name}</h1>
                                    <p className="text-gray-600">{item?.date}</p>
                                </div>
                            </div>
                            <div className="flex gap-4" style={{ marginLeft: 18 }}>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        addToCart(item)
                                    }}
                                >
                                    +
                                </button>
                                <p className='text-white'>{item.quantity}</p>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        removeFromCart(item)
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                    {
                        cartItems.length > 0 ? (
                            <>
                                <div className="flex flex-row justify-center items-center" style={{ marginTop: 40 }}>
                                    <button
                                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                        onClick={
                                            clearCart
                                        }
                                    >
                                        Clear cart
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-pink-600 text-white text-xs font-bold uppercase rounded hover:bg-pink-500 focus:outline-none focus:bg-gray-700"
                                        style={{ marginLeft: 20 }}
                                        onClick={
                                            EventTicketMint}
                                    >
                                        Book Tickets
                                    </button>
                                </div>

                            </>
                        ) : (
                            <h1 className="text-lg text-white font-bold">Your cart is empty</h1>
                        )
                    }
                </div>

            </div>
        </>
    )


}

export default Cart
