import React from "react";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppSideBar from "../../components/AppSideBar/AppSideBar";

const Promotions = () => {
    return (
        <>
            <AppSideBar />
            <main className="main vh-100" id="main">
                <div className="mainContaint PromotionPage">
                    <div className="container-fluid promotionSection">
                        <div className="row">
                            <div className="col-l2">
                                <div className="d-md-inline-flex d-flex gap-md-5 justify-content-between align-items-center ">
                                    <div className="PromotionHeading">Promotions</div>
                                    <ul className="promoationPills d-flex align-items-start mb-0 ps-0 list-unstyled me-xxl-0 me-3">
                                        <li className="activePill">
                                            <a href="javascipt:;" className="PromotionBtn active d-flex align-items-center justify-content-center text-decoration-none">Active <span className="activeCount ps-1">6</span></a>
                                        </li>
                                        <li className="activePill">
                                            <a href="javascipt:;" className="PromotionBtn d-flex justify-content-center align-items-center text-decoration-none">Finished</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 sportBtnMain">
                                <div className="row align-items-center">
                                    <div className="col-md-6 text-md-start text-center">
                                        <a href="javascript:;" className="text-decoration-none sportBtn fw-semibold d-inline-flex align-items-center position-relative">
                                            <div className=" d-flex align-items-center justify-content-between sportbtncontent h-100 w-100">
                                                <div className="d-flex align-items-center">
                                                    <span className="pe-3">
                                                        <img src="assets/img/promotion/sportball.png" alt="sport Button" className="img-fluid" />
                                                    </span>
                                                    Sports
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="assets/img/promotion/rightarrowbtn.png" alt="arrow" />
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:;" className="text-decoration-none sportBtn fw-semibold d-inline-flex mt-2 align-items-center position-relative">
                                            <div className="h-100 w-100  d-flex align-items-center justify-content-between sportbtncontent">
                                                <div className="d-flex align-items-center">
                                                    <span className="pe-3">
                                                        <img src="assets/img/promotion/casinochipbtn.png" alt="casino Button" className="img-fluid" />
                                                    </span>
                                                    Casino
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="assets/img/promotion/rightarrowbtn.png" alt="arrow" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-6 promotionRight position-relative">
                                        <div className="row ">
                                            <div className="col-12 promoHeading">Promo Code</div>
                                            <div className="col-12 Promopara">Enter the Promo code to get the bonus</div>
                                            <div className="col-12 pt-4">
                                                <div className="promoInputMain position-relative">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control promoInput shadow-none border-0 h-100" placeholder="Your promo code" aria-label="Your promo code" aria-describedby="basic-addon2" />
                                                        <button className="input-group-text btn getnowBtn border-0 d-inlene-flex align-items-center justify-content-center h-100" id="basic-addon2">Get now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row promotionCardMain">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="promotionCard row mx-0">
                                            <div className="promoimg position-relative col-12 px-0">
                                                <img src="assets/img/promotion/promocard3.png" alt="promotion" className="h-100 w-100 img-fluid" />
                                                <div className="promodetail position-absolute top-0 start-0">
                                                    <div className="promoCardHeading">BONUSES PROMO <br /> CODES</div>
                                                    <div className="promoCardpara pt-1">Enter the promo code <br /> to get a bonusS</div>
                                                </div>
                                                <div className="promotionTag d-flex align-items-center justify-content-center position-absolute">Promo 01</div>
                                            </div>
                                            <div className="col-12 promotioncardTitle px-1">Hunt for promo codes to get cool Bonuses from DAMBLE</div>
                                            <div className="col-12 seemore px-1">
                                                <a href="javascript:;" className="text-decoration-none seemoreBtn d-flex align-items-center">
                                                    See More
                                                    <span className="d-flex align-items-center justify-content-center ps-3"><img src="assets/img/promotion/seemore.png" alt="see more" /></span>
                                                </a>
                                            </div>
                                            {/* <div class="position-absolute end-0 bottom-0"><img src="assets/img/promotion/promotioncard2.png" alt=""></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="promotionCard row mx-0">
                                            <div className="promoimg position-relative col-12 px-0">
                                                <img src="assets/img/promotion/promocard2.png" alt="promotion" className="h-100 w-100 img-fluid" />
                                                <div className="promodetail position-absolute top-0 start-0">
                                                    <div className="promoCardHeading">GET 100 <br /> <span className="promoCardHeadingtwo">NO DEPOSIT</span><br />  FREE SPINS</div>
                                                    <div className="promoCardpara pt-1">To Play exclusive <br /> <span className="promoCardparatwo">DAMBLE</span> slot</div>
                                                </div>
                                                <div className="promotionTag d-flex align-items-center justify-content-center position-absolute">Promo 02</div>
                                            </div>
                                            <div className="col-12 promotioncardTitle px-1 pb-sm-2">100 no deposit Free Spins for registration</div>
                                            <div className="col-12 seemore px-1">
                                                <a href="javascript:;" className="text-decoration-none seemoreBtn d-flex align-items-center">
                                                    See More
                                                    <span className="d-flex align-items-center justify-content-center ps-3"><img src="assets/img/promotion/seemore.png" alt="see more" /></span>
                                                </a>
                                            </div>
                                            {/* <div class="position-absolute end-0 bottom-0"><img src="assets/img/promotion/promotioncard2.png" alt=""></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="promotionCard row mx-0">
                                            <div className="promoimg position-relative col-12 px-0">
                                                <img src="assets/img/promotion/promocard1.png" alt="promotion" className="h-100 w-100 img-fluid" />
                                                <div className="promodetail position-absolute top-0 start-0">
                                                    <div className="promoCardHeading">CHOOSE <br /> <span className="promoCardHeadingtwo">WELCOME</span> <br /> PACK</div>
                                                    <div className="promoCardpara pt-1">Get free spin and Deposit <br /> Bonuses</div>
                                                </div>
                                                <div className="promotionTag d-flex align-items-center justify-content-center position-absolute">Promo 03</div>
                                            </div>
                                            <div className="col-12 promotioncardTitle px-1">Get your Welcome Pack up to <span className="titletwo">1000</span> free Spins &amp; <span className="titletwo">$3.500</span></div>
                                            <div className="col-12 seemore px-1">
                                                <a href="javascript:;" className="text-decoration-none seemoreBtn d-flex align-items-center">
                                                    See More
                                                    <span className="d-flex align-items-center justify-content-center ps-3"><img src="assets/img/promotion/seemore.png" alt="see more" /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="promotionCard row mx-0">
                                            <div className="promoimg position-relative col-12 px-0">
                                                <img src="assets/img/promotion/promocard4.png" alt="promotion" className="h-100 w-100 img-fluid" />
                                                <div className="promodetail position-absolute top-0 start-0">
                                                    <div className="promoCardHeading">TWITTER <div className="promoCardHeadingtwo">SHARE &amp; WIN</div> COMPETITION</div>
                                                </div>
                                                <div className="promotionTag d-flex align-items-center justify-content-center position-absolute">Promo 04</div>
                                            </div>
                                            <div className="col-12 promotioncardTitle px-1">Share your results with frinds on twitterand win prizes</div>
                                            <div className="col-12 seemore px-1">
                                                <a href="javascript:;" className="text-decoration-none seemoreBtn d-flex align-items-center">
                                                    See More
                                                    <span className="d-flex align-items-center justify-content-center ps-3"><img src="assets/img/promotion/seemore.png" alt="see more" /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="promotionCard row mx-0">
                                            <div className="promoimg position-relative col-12 px-0">
                                                <img src="assets/img/promotion/promocard5.png" alt="promotion" className="h-100 w-100 img-fluid" />
                                                <div className="promodetail position-absolute top-0 start-0">
                                                    <div className="promoCardHeading">JOIN <span className="promoCardHeadingtwo">VIP CLUB</span> <br /> BECOME ROYALTY </div>
                                                    <div className="promoCardpara pt-1">Up to 25% cashback bonus and <br /> the best benefits</div>
                                                </div>
                                                <div className="promotionTag d-flex align-items-center justify-content-center position-absolute">Promo 05</div>
                                            </div>
                                            <div className="col-12 promotioncardTitle px-1">Show high gaming activity and get your invitation to our <span className="titlethree">VIP Club.</span></div>
                                            <div className="col-12 seemore px-1">
                                                <a href="javascript:;" className="text-decoration-none seemoreBtn d-flex align-items-center">
                                                    See More
                                                    <span className="d-flex align-items-center justify-content-center ps-3"><img src="assets/img/promotion/seemore.png" alt="see more" /></span>
                                                </a>
                                            </div>
                                            {/* <div class="position-absolute end-0 bottom-0"><img src="assets/img/promotion/promotioncard2.png" alt=""></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="promotionCard row mx-0">
                                            <div className="promoimg position-relative col-12 px-0">
                                                <img src="assets/img/promotion/promocard6.png" alt="promotion" className="h-100 w-100 img-fluid" />
                                                <div className="promotionTag d-flex align-items-center justify-content-center position-absolute">Promo 06</div>
                                            </div>
                                            <div className="col-12 promotioncardTitle px-1">Show your betting power &amp; get a chance to win a <span className="titlethree">Lamborghini Huracan</span></div>
                                            <div className="col-12 seemore px-1">
                                                <a href="javascript:;" className="text-decoration-none seemoreBtn d-flex align-items-center">
                                                    See More
                                                    <span className="d-flex align-items-center justify-content-center ps-3"><img src="assets/img/promotion/seemore.png" alt="see more" /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  **** Footer section *** */}
                <AppFooter />
            </main>
        </>
    )
};

export default Promotions;
