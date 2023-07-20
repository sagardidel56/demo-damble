import React from 'react'
import './style.scss'
import card1 from './../../assets/picture/cardimg1.svg'
import card2 from './../../assets/picture/cardimg2.svg'
import card3 from './../../assets/picture/cardimg3.png'
import card4 from './../../assets/picture/cardimg4.png'

const AboutCard = () => {
    return (
        <>
            <div id='aboutUs' className="container-fluid lp-aboutFluid py-5">
                <div className="container aboutContainer">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-6">
                            <div className="aboutCard h-100">
                                <div className="row borderKey h-100">
                                    <div className="col-12">
                                        <div className="aboutImg">
                                            <img src={card1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 aboutHead">VIP CLUB</div>
                                    <div className="col-12 aboutSubHead">BECOME ROYALTY! </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="aboutCard Card2 h-100">
                                <div className="row borderKey h-100">
                                    <div className="col-12">
                                        <div className="aboutImg">
                                            <img src={card2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 aboutHead">GIVEAWAY</div>
                                    <div className="col-12 aboutSubHead">The higer rank you are, the more surprising it will be </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="aboutCard Card3 h-100">
                                <div className="row borderKey h-100">
                                    <div className="col-12">
                                        <div className="aboutImg abtImg3">
                                            <img src={card3} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 aboutHead">WEEKLY BONUS</div>
                                    <div className="col-12 aboutSubHead">Come to Damble more often and get bonuses! </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="aboutCard Card4 h-100">
                                <div className="row borderKey h-100">
                                    <div className="col-12">
                                        <div className="aboutImg abtImg4">
                                            <img src={card4} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 aboutHead">DAMBLE AFFILIATE</div>
                                    <div className="col-12 aboutSubHead">The most rewarding affiliate program!  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard