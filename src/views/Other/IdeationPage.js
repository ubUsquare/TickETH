import React from 'react'
import logo from "../../assets/images/TICKETH.png";
import Section_5 from '../Home/Components/Section_5';

const IdeationPage = () => {
    return (
        <div >

            <img
                src="https://opne9reactnext.vercel.app/_next/static/media/bg-home2.d35f9112.png"
                className="left-0 top-[15pc] absolute"
                alt=""
            />

            <div >

                <img src={logo} alt="Logo" style={{ margin: "60px auto 30px", display: 'block', width: 90, borderRadius: 8 }} />

                <p
                    className="text-white text-l text-gray-900/90"
                    style={{ margin: "15px auto", letterSpacing: 1, width: "85%", lineHeight: "30px" }}
                >
                    Events bring people together, but behind the excitement, there's a growing problem—ticket fraud. From fake tickets to scalping, event organizers and attendees face significant challenges.
                    <br /><br />
                    Every year, millions of event-goers fall victim to ticket fraud, losing their money and missing out on experiences. Scalping also inflates prices, making it harder for genuine fans to attend. Event organizers struggle with these issues, leading to lost revenue and damaged reputations.
                    <br /><br />
                    Introducing our solution—a blockchain-based dApp that revolutionizes event ticketing. By tokenizing event tickets as NFTs, we ensure that every ticket is authentic, traceable, and secure. With our platform, event organizers can issue tickets directly to buyers, eliminating middlemen and reducing fraud.
                    <br /><br />
                    Our platform offers a seamless experience for both organizers and attendees. Tickets are minted as NFTs and sold directly through our marketplace. Buyers can choose from various ticket types, like Platinum, Gold, and Silver, ensuring they find the perfect fit. Once purchased, tickets are stored securely in the buyer's digital wallet.
                    <br /><br />
                    On the day of the event, attendees simply present their NFT tickets for validation. Our system instantly verifies the ticket's authenticity, granting access only to legitimate ticket holders. This reduces entry delays and enhances the overall event experience.
                    <br /><br />
                    By leveraging blockchain technology, our dApp ensures that every ticket is secure, transparent, and unique. This not only protects attendees from scams but also gives organizers full control over ticket sales and distribution. Our solution fosters trust, fairness, and accessibility in the event industry.
                </p>


            </div>

            <Section_5 />
        </div>
    )
}

export default IdeationPage
