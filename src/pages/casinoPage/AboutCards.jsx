import React from "react";

const AboutCards = () => {
    return (
        <div className=" aboutFluid pt-sm-5 pt-0">
            <div className="row gy-5">
                <div className="col-lg-3 col-6">
                    <div className="aboutCard h-100">
                        <div className="row borderKey h-100">
                            <div className="col-12">
                                <div className="aboutImg">
                                    <img src="assets/img/cardimg1.png" alt />
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
                                    <img src="assets/img/cardimg2.png" alt />
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
                                    <img src="assets/img/cardimg3.png" alt />
                                </div>
                            </div>
                            <div className="col-12 aboutHead">WEEKELY BONUS</div>
                            <div className="col-12 aboutSubHead">Come to Damble more often and get bonuses! </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="aboutCard Card4 h-100">
                        <div className="row borderKey h-100">
                            <div className="col-12">
                                <div className="aboutImg abtImg4">
                                    <img src="assets/img/cardimg4.png" alt />
                                </div>
                            </div>
                            <div className="col-12 aboutHead">DAMBLE AFFILIATE</div>
                            <div className="col-12 aboutSubHead">The most rewarding affiliate program!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCards;
