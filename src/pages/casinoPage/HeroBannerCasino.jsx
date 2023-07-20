import React from "react";

const HeroBannerCasino = () => {
    return (
        <div className="container-fluid heroSection px-0">
            <div className="sectionInner">
                <div className="row mainOuter mx-0">
                    <div className="col-12 main">
                        <div className="row innermain">
                            <div className="col-lg-7 contentSide order-lg-1 order-2">
                                <div className="row h-100 flex-column">
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="casinoHeading">Online’s Greatest Casino</div>
                                        <div className="casinoSubheading">Enjoy thousands of Casino games, fast withdrawals and 24/7 live support. All you need from a Casino in one place!</div>
                                    </div>
                                    <div className="col-12 reward mt-auto pb-md-5 pb-3 text-sm-start text-center">
                                        <div className="signUp">Sign up &amp; <span>get reward</span></div>
                                        <div className="mainHeading">Up To <span>$ 20.000</span></div>
                                        <div className="mt-2"><button type="button" className="signUpBtn">Sign up</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 order-lg-2 order-1">
                                <div className="col-12 contentSide d-sm-none d-block text-center">
                                    <div className="casinoHeading">Online’s Greatest Casino</div>
                                    <div className="casinoSubheading">Enjoy thousands of Casino games, fast withdrawals and 24/7 live support. All you need from a Casino in one place!</div>
                                </div>
                                <div className="heroImg "><img src="assets/img/herodamble.png" className="w-100" alt="Damble" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerCasino;
