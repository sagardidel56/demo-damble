import React from 'react'
import './Style.scss'
import WhyGamble1 from './../../assets/picture/why-gamble-1.svg'
import WhyGamble2 from './../../assets/picture/why-gamble-2.svg'
import WhyGamble3 from './../../assets/picture/why-gamble-3.svg'
import WhyGamble4 from './../../assets/picture/why-gamble-4.svg'

const WhyGamble = () => {
    return (
        <>
            <div className="container-fluid lp-whyIsGamble">
                <div className="container whyIsGambleInner">
                    <div className="row">
                        <div className="col-12 sectionHeading">Why Gamble on Damble?</div>
                        <div className="col-12">
                            <div className="row mx-0">
                                <div className="col-12 whyBox">
                                    <div className="row align-items-center">
                                        <div className="col-md col-12 leftSide">
                                            <div className="row flex-column">
                                                <div className="col boxHeading">Advanced technology to provide a unique and exciting user experience.</div>
                                                <div className="col boxText">
                                                    The platform employs state-of-the-art graphics and sound effects to create a realistic and immersive
                                                    environment that transports users to the world of high-stakes gambling,
                                                    it's user interface and experience was the success of years of development,
                                                    ensuring an experience never seen in the industry before.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-12 rightSide">
                                            <img src={WhyGamble1} className='whyGambleImg1' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 whyBox">
                                    <div className="row align-items-center">
                                        <div className="col-md col-12 leftSide">
                                            <div className="row flex-column">
                                                <div className="col boxHeading">Provably fair. At Damble, trust matters.</div>
                                                <div className="col boxText">
                                                    One of the most significant advantages of using Damble is the platform's
                                                    commitment to user security and fair play. Damble uses the latest encryption technology to ensure that user's
                                                    personal and financial information is kept safe and secure as well as provably fair,
                                                    ensuring all the games results are verifiable and all your bets are fair.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-12 rightSide">
                                            <img src={WhyGamble2} className='whyGambleImg2' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 whyBox">
                                    <div className="row align-items-center">
                                        <div className="col-md col-12 leftSide">
                                            <div className="row flex-column">
                                                <div className="col boxHeading">Various payment options and lightning fast transactions using blockchain technology.</div>
                                                <div className="col boxText">
                                                    Furthermore, Damble offers a wide range of payment options,
                                                    making it easy for users to deposit and withdraw funds from their accounts. Users can choose from a variety of payment methods,
                                                    including credit and debit cards, cryptocurrency, e-wallets, and bank transfers.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-12 rightSide">
                                            <img src={WhyGamble3} className='whyGambleImg3' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 whyBox">
                                    <div className="row align-items-center">
                                        <div className="col-md col-12 leftSide">
                                            <div className="row flex-column">
                                                <div className="col boxHeading">Devoted to provide an exceptional experience.</div>
                                                <div className="col boxText">
                                                    Damble is a truly exceptional online gambling platform that combines cutting-edge technology,
                                                    a vast selection of games and sports betting options, and a commitment to user security and fair play.
                                                    Our team is devoted to provide an exceptional experience, 24/7 support, and an immersive experience.
                                                    If you're looking for the ultimate online gambling experience, Damble is undoubtedly the platform for you.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-12 rightSide">
                                            <img src={WhyGamble4} className='whyGambleImg4' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyGamble