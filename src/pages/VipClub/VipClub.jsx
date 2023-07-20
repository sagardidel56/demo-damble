import React from "react";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppSideBar from "../../components/AppSideBar/AppSideBar";

const VipClub = () => {
    return (
        <>
            <AppSideBar />
            <main className="main vh-100" id="main">
                <div className="mainContaint vipclubMain">
                    {/* ****** [vipc Hero Section Start ] ****** */}
                    <div className="container-fluid vipheroSection position-relative px-0">
                        <div className="vipheroMain">
                            <div className="row">
                                <div className="col-12 heroHeading text-center">A LOT OF BENEFITS WITH <br />
                                    <span className="heroHeadingtwo">OUR RANKING SYSTEM</span>
                                </div>
                                <div className="col-12 vipHorocard position-relative">
                                    <div className="row gy-sm-5 gy-4 mx-0">
                                        <div className="col-md-6">
                                            <div className="heroCard d-flex align-items-center">
                                                <div className="cardiconone d-inline-flex justify-content-center align-items-center">
                                                    <img src="assets/img/vipClub/heroCard1.png" alt="Hero Card" className="h-100 w-100 img-fluid" />
                                                </div>
                                                <div className="ps-sm-4 ps-3">
                                                    <div className="heroCardTitle fw-bold">INCREASED CASHBACK</div>
                                                    <div className="heroCardpara fw-semibold">Up to 25% of your coins back in your wallet!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="heroCard d-flex align-items-center justify-content-md-end justify-content-start">
                                                <div className="cardicontwo d-inline-flex justify-content-center align-items-center">
                                                    <img src="assets/img/vipClub/heroCard2.png" alt="Hero Card" className="h-100 w-100 img-fluid" />
                                                </div>
                                                <div className="exclusive">
                                                    <div className="heroCardTitle fw-bold">EXCLUSIVE PROMOTIONS</div>
                                                    <div className="heroCardpara fw-semibold">Damble has the most appealing promotions!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="heroCard d-flex align-items-center">
                                                <div className="cardiconthree d-inline-flex justify-content-center align-items-center">
                                                    <img src="assets/img/vipClub/heroCard3.png" alt="Hero Card" className="h-100 w-100 img-fluid" />
                                                </div>
                                                <div className="levelndrew">
                                                    <div className="heroCardTitle fw-bold">LEVELS &amp; REWARDS</div>
                                                    <div className="heroCardpara fw-semibold">Play more earn more!</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="heroCard d-flex align-items-center justify-content-md-end justify-content-start">
                                                <div className="cardiconfour d-inline-flex justify-content-center align-items-center">
                                                    <img src="assets/img/vipClub/heroCard4.png" alt="Hero Card" className="h-100 w-100 img-fluid" />
                                                </div>
                                                <div className="playearn">
                                                    <div className="heroCardTitle fw-bold"><span className="vip">VIP</span> CLUB</div>
                                                    <div className="heroCardpara fw-semibold">Join our VIP Club and get exclusive rewards!</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 pt-sm-0 pt-5">
                                    <div className="vipheroImg mx-auto position-relative">
                                        <img src="assets/img/vipClub/herosection.png" alt="hero section" className="h-100 w-100 img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ****** [vipc Hero Section End ] ****** */}
                    {/* ****** [how work Section Start ] ****** */}
                    <div className="container-fluid howWork px-sm-5 position-relative">
                        <div className="row">
                            <div className="howworkHeading col-12 text-md-start text-center">HOW DOES IT WORK?</div>
                            <div className="howorkpara col-12 fw-semibold pt-sm-1 pt-3">Start your gaming jounrey from the 1st Rank – NEW DAMBLER. The more you play – the higher your rank will increase. Your level goes up according to the wagered amount played on DAMBLE</div>
                            <div className="col-12">
                                <div className="row h-100 align-items-center">
                                    <div className="col-md-12 col px-0 howWorkcard">
                                        <div className="row mx-0 workCardMain">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="workCard h-100 row mx-0 align-items-center">
                                                    <div className="text-center mx-md-auto col-md-auto col-4">
                                                        <div className="workCardImg loginIcon mx-auto d-flex justify-content-center align-items-center">
                                                            <img src="assets/img/vipClub/logindamble.png" alt="Login Damble" className="img-fluid h-100 w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col">
                                                        <div className="workCardtitle fw-bold text-md-center text-start pt-md-3">LOGIN ON <br className="d-lg-block d-none" /> DAMBLE</div>
                                                        <div className="workCardpara pt-md-3 pt-1 fw-semibold text-md-center text-start">Few clicks away from an amazing gaming experience on DAMBLE</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="workCard h-100 row mx-0 align-items-center">
                                                    <div className="text-center mx-md-auto col-md-auto col-4">
                                                        <div className="workCardImg playIcon mx-auto d-flex justify-content-center align-items-center">
                                                            <img src="assets/img/vipClub/playfavgames.png" alt="Login Damble" className="img-fluid h-100 w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col">
                                                        <div className="workCardtitle fw-bold text-md-center text-start pt-md-3">PLAY YOUR FAVORITE GAMES</div>
                                                        <div className="workCardpara pt-md-3 pt-1 fw-semibold text-md-center text-start">Enjoy playing, get the best gaming experience and high level of service!</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 pt-lg-0 pt-md-4">
                                                <div className="workCard h-100 row mx-0 align-items-center">
                                                    <div className="text-center workCardImg col-md-auto  mx-md-auto col-4 text-center">
                                                        <div className="workCardImg inreaseIcon mx-auto d-flex justify-content-center align-items-center">
                                                            <img src="assets/img/vipClub/increaserank.png" alt="Login Damble" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col ">
                                                        <div className="workCardtitle fw-bold text-md-center text-start pt-md-1">INCREASE YOUR RANK</div>
                                                        <div className="workCardpara pt-md-3 pt-1 fw-semibold text-md-center text-start">Go up to the next Rank! Each level has its bonus and even more opportunities!</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-auto mx-auto workprogress h-100 d-md-block d-flex align-items-center">
                                        <div className="progressMain d-flex align-items-center justify-content-between position-relative flex-md-row flex-column">
                                            <div className="progressBar rounded-pill d-flex align-items-center justify-content-center">1</div>
                                            <div className="progressBar rounded-pill d-flex align-items-center justify-content-center">2</div>
                                            <div className="progressBar rounded-pill d-flex align-items-center justify-content-center">3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 playbtnMain text-center"><a href="javascipt:;" className="btn text-decoration-none playBtn fw-bold">Play Now</a></div>
                        </div>
                    </div>
                    {/* ****** [how work Section end ] ****** */}
                    {/* ****** [rank Section Start ] ****** */}
                    <div className="container-fluid rankSection">
                        <div className="row">
                            <div className="col-12 rankHeading text-md-start text-center">UP TO <span className="rankHeadingtwo">20 LEVELS</span> TO REACH!</div>
                            <div className="col-10 mx-md-0 mx-auto rankpara fw-semibold text-md-start text-center">You can reach the Highest Rank, DAMBLE MASTER LEGEND and get 25% cashback bonus and all the benefits our platform offers! Enjoy Damble and get  the best gaming experience!</div>
                            <div className="col-12 position-relative">
                                <div className="rankcontent">
                                    <div className="row rankcontentRow">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center"><img src="assets/img/vipClub/rankcard1.png" alt="rank" className="img-fluid h-100 w-100" /></div>
                                                <div className="rankCHeading">NEW DAMBLER </div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank1.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                1%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                0 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                0 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Rakeback</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 d-sm-block d-none">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center"><img src="assets/img/vipClub/rankcard2.png" alt="rank" className="img-fluid h-100 w-100" /></div>
                                                <div className="rankCHeading">DAMBLER I</div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank2.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">2%</div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                3 000 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                3 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Rakeback</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 d-sm-block d-none">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center"><img src="assets/img/vipClub/rankcard3.png" alt="rank" className="img-fluid h-100 w-100" /></div>
                                                <div className="rankCHeading">DAMBLER II</div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank3.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                3%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                10 000 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                5 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Rakeback 3%</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-sm-none d-block">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center"><img src="assets/img/vipClub/rankcard1.png" alt="rank" className="img-fluid h-100 w-100" /></div>
                                                <div className="rankCHeading ">NEW DAMBLER </div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank1.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                1%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                0 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                0 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Rakeback</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-sm-none d-block">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center"><img src="assets/img/vipClub/rankcard1.png" alt="rank" className="img-fluid h-100 w-100" /></div>
                                                <div className="rankCHeading ">NEW DAMBLER </div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank1.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                1%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                0 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                0 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Rakeback</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 d-sm-block d-none">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center"><img src="assets/img/vipClub/rankcard4.png" alt="rank" className="img-fluid h-100 w-100 " /></div>
                                                <div className="rankCHeading">DAMBLER III</div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank4.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                4%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                25 000 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                10 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Rakeback 4%</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 d-sm-block d-none">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center damblerproone"><img src="assets/img/vipClub/rankcard5.png" alt="rank" className="img-fluid h-100 w-100 object-fit-none" /></div>
                                                <div className="rankCHeading">DAMBLER PRO I</div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank5.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                5%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                50 000 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                15 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Rakeback 5%</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 d-sm-block d-none">
                                            <div className="rankCard h-100">
                                                <div className="rankcardImg d-flex justify-content-center align-items-center mx-auto text-center damblerproone"><img src="assets/img/vipClub/rankcard6.png" alt="rank" className="img-fluid h-100 w-100 object-fit-none" /></div>
                                                <div className="rankCHeading">DAMBLER PRO II</div>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <div className="rankcount d-flex align-items-center justify-content-center"><img src="assets/img/vipClub/rank6.png" alt="count" className="img-fluid" /></div>
                                                    <div>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="ranktitle">Cashback</div>
                                                            <div className="ranktitleprice ps-1">
                                                                6%
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Total Wager</div>
                                                            <div className="ranktitleprice">
                                                                100 000 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 pt-2">
                                                            <div className="ranktitle">Rank bonus</div>
                                                            <div className="ranktitleprice">
                                                                25 <span className="us">USDT</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardline" />
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Personalization</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Daily tasks</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                        
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain active">
                                                    <div className="rankDetail">Rakeback 6%</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">Exclusive promotion</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between rankdetailmain">
                                                    <div className="rankDetail">VIP Club bonus</div>
                                                    <div className="rankDetailicon rounded-pill d-flex align-items-center justify-content-center">
                                                        <span className="checkicon d-inline-flex align-items-center justify-content-center">
                                                            <img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute rankproMain h-100">
                                    <div className="rankproline d-flex flex-column position-relative justify-content-between align-items-center">
                                        <div className="rankprogress d-flex justify-content-center align-items-center">
                                            <span className="progressicon d-inline-flex align-items-center justify-content-center">
                                                <img src="assets/img/vipClub/progressup.png" alt="Progress" className="h-100 w-100 img-fluid" />
                                            </span>
                                        </div>
                                        <div className="rankprogress d-flex justify-content-center align-items-center">
                                            <span className="progressicon d-inline-flex align-items-center justify-content-center">
                                                <img src="assets/img/vipClub/progressdown.png" alt="Progress" className="h-100 w-100 img-fluid" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ****** [rank Section end ] ****** */}
                    {/* ****** [become royalty Section Start ] ****** */}
                    <div className="container-fluid becomeroylty">
                        <div className="royaltyCard">
                            <div className="row">
                                <div className="col-12 royaltyHeading text-center">BECOME <span className="Headingtwo">ROYALTY!</span> </div>
                                <div className="col-12">
                                    <div className="royaltyImg mx-auto d-flex align-items-center justify-content-center">
                                        <img src="assets/img/vipClub/royalty.png" alt="become royalty" className="h-100 w-100 img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-8 mx-auto royaltypara text-center fw-semibold">Up to 25% cashback bonus and the best benefits. Stay with
                                    DAMBLE and receive the best gaming experience and highest level of service!
                                </div>
                                <div className="col-lg-7 col-md-8 royaltsubheading mx-auto text-center">Show high gaming activity and get your invitation to our <span className="royaltSubHeadingTwo"> VIP Club.</span></div>
                                <div className="col-12 joinBtnMain text-center">
                                    <a href="javascript:;" className="btn border-0 text-decoration-none joinBtn">Join</a>
                                </div>
                                <div className="col-12">
                                    <div className="row mx-0 align-items-end">
                                        <div className="col px-sm-2 px-3">
                                            <div className="d-flex align-items-cente royaltyContent">
                                                <div className="royaltycheckmain rounded-pill d-flex align-items-center justify-content-center"><span className="royaltyicon d-inline-flex align-items-center justify-content-center"><img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" /></span></div>
                                                <div className="royaltychecktitle fw-bold">Personal VIP manager</div>
                                            </div>
                                            <div className="d-flex align-items-center royaltyContent">
                                                <div className="royaltycheckmain rounded-pill d-flex align-items-center justify-content-center"><span className="royaltyicon d-inline-flex align-items-center justify-content-center"><img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" /></span></div>
                                                <div className="royaltychecktitle fw-bold">Other additional perks</div>
                                            </div>
                                            <div className="d-flex align-items-center royaltyContent">
                                                <div className="royaltycheckmain rounded-pill d-flex align-items-center justify-content-center"><span className="royaltyicon d-inline-flex align-items-center justify-content-center"><img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" /></span></div>
                                                <div className="royaltychecktitle fw-bold">Insights</div>
                                            </div>
                                            <div className="d-flex align-items-center royaltyContent">
                                                <div className="royaltycheckmain rounded-pill d-flex align-items-center justify-content-center"><span className="royaltyicon d-inline-flex align-items-center justify-content-center"><img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" /></span></div>
                                                <div className="royaltychecktitle fw-bold">Higher cashback rewards</div>
                                            </div>
                                            <div className="d-flex align-items-center royaltyContent">
                                                <div className="royaltycheckmain rounded-pill d-flex align-items-center justify-content-center"><span className="royaltyicon d-inline-flex align-items-center justify-content-center"><img src="assets/img/vipClub/checkicon.png" alt="check" className="h-100 w-100 img-fluid" /></span></div>
                                                <div className="royaltychecktitle fw-bold">Weekly and Monthly bonuses</div>
                                            </div>
                                        </div>
                                        <div className="royaltyLine mx-auto d-md-none d-block" />
                                        <div className="col-auto telegramchan fw-semibold">More details in our <a href="javascript:;" className="text-decoration-none telegram">VIP Telegram</a> channel</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ****** [become royalty Section end ] ****** */}
                    {/* ****** [about damble Section Start ] ****** */}
                    <div className="container-fluid aboutDambleFluid d-md-block d-none">
                        <div className="row">
                            <div className="col-12 aboutDambleFluidHeading">ABOUT DAMBLE</div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">How to become a part of the <span>VIP Club</span>?</div>
                            <div className="col-12 para">DAMBLE VIP Club is the place where the most active users are gathered and get exclusive rewards for it.</div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">How to become a part of the<span>VIP Club</span>?</div>
                            <div className="col-12 para">In order to become a member of the VIP Club you need to reach Rank 11 &amp; your personal host will send you your invitation right away..</div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">What are the benefits of being in the<span>VIP Club</span>?</div>
                            <div className="col-12 para">DAMBLE VIP Club unlocks the following benefits:
                                <ul>
                                    <li>First hand information directly from the team;</li>
                                    <li>Weekly, monthly, birthday and other bonuses;</li>
                                    <li>Higher referral rate</li>
                                    <li>Special VIP events&amp;battles; </li>
                                    <li>Dedicated personal manager with an individual approach to solve any problem if necessary.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">What does affect the weekly/monthly bonus?</div>
                            <div className="col-12 para">The only thing that affects your bonuses is your gaming activity, the more you play, the more you get. Exception is the Birthday bonus which is sent to the user regardless.</div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">I want to become a part of the VIP Club, but I haven’t
                                reached Rank 11. What should I do?</div>
                            <div className="col-12 para">You need to contact one of the VIP managers. If high activity is detected the team could consider a possibility of making you a part of the VIP Club before reaching the necessary rank.</div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">Are there any special offers for<span>VIP Club</span> members?</div>
                            <div className="col-12 para">Yes, there are a lot of them. Your manager will inform you about everything else personally in detail.</div>
                        </div>
                        <div className="row bottomBorder">
                            <div className="col-12 subHeading">I am a member and I haven’t received any bonus yet.
                                Why? When are they sent to the users and how often?</div>
                            <div className="col-12 para">The are several reasons for it. It’s either you haven’t played on DAMBLE for a long period of time or you became a VIP Club member less than a week ago and it didn’t accumulate yet. Weekly bonuses are sent out each Monday and monthly on the 1st of each month.</div>
                        </div>
                    </div>
                    {/* ****** [about damble Section end ] ****** */}
                </div>
                {/*  **** Footer section *** */}
                <AppFooter />
            </main>
        </>
    );
};

export default VipClub;
