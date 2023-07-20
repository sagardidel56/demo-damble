import React from "react";

const CasinoSportsCards = () => {
    return (
        <div className="container-fluid px-0">
            <div className="cardSection">
                <div className="cardInner">
                    <div className="row gy-4 gy-sm-0">
                        <div className="col-sm-6 pe-xl-4">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="card cardOuterBg1">
                                        <div className="cardBg card1 h-100">
                                            <div className="row h-100">
                                                <div className="col-md-12">
                                                    <div className="cardheading d-flex align-items-center">
                                                        <div className="cardHeadingImg">
                                                            <img src="assets/img/casino.png" alt="casino" />
                                                        </div>
                                                        CASINO
                                                    </div>
                                                    <div className="cardPara mt-1">pLAY GAMES, WIN MONEY</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 col-sm-10">
                                    <div className="cardButton cardButtonBg1">Register &amp; get 360% bonus</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 ps-xl-4">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="card cardOuterBg2">
                                        <div className="cardBg card2 h-100">
                                            <div className="row h-100">
                                                <div className="col-md-12">
                                                    <div className="cardheading d-flex align-items-center">
                                                        <div className="cardHeadingImg">
                                                            <img src="assets/img/sports.png" alt="Sports" />
                                                        </div>
                                                        SPORTS
                                                    </div>
                                                    <div className="cardPara mt-1">Bet on sports &amp; Esports</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-11 col-sm-10">
                                    <div className="cardButton cardButtonBg2">Register &amp; get 360% bonus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CasinoSportsCards;
