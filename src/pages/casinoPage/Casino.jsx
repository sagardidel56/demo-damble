import React, { useEffect } from "react";
import Swiper from 'swiper'
// import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SignUp from '../../components/signUp/signUp'
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

import { Navigation, Pagination } from 'swiper/modules';
import SignIn from "../../components/signIn/signIn";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppSideBar from "../../components/AppSideBar/AppSideBar";
import HeroBannerCasino from './HeroBannerCasino'
import SpinCard from "./SpinCard";
import CasinoSportsCards from "./CasinoSportsCards";
import GameTabs from "./GameTabs";
import DambleTable from "./DambleTable";
import AboutCards from "./AboutCards";

const Casino = () => {

    useEffect(() => {
        var swiper = new Swiper(".cardSwiper", {
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: ".swiper-button-next-unique",
                prevEl: ".swiper-button-prev-unique",
            },
            breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                430: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                576: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 17,
                },
                992: {
                    slidesPerView: 6,
                    spaceBetween: 17,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
            },
        });
        // swiper
    }, [])
    return (
        <>
            {/* * Aside Bar Start */}
            <AppSideBar />
            {/* * Aside Bar End */}
            <main className="main vh-100" id="main">
                <div className="mainContaint">
                    <div className="homepage">
                        {/* ****** [ Hero Section Start ] ****** */}
                        <HeroBannerCasino />
                        {/* ****** [ Hero Section End ] ****** */}
                        {/* spin card section  start*/}
                        <SpinCard />
                        {/* spin card section  end*/}
                        {/* ****** [ Casino Card Section Start ] ****** */}
                        <CasinoSportsCards />

                        {/* ****** [ Casino Card Section End ] ****** */}
                        {/* cardsection  */}
                        <div className=" bonusCard  mb-5">
                            <div className="innerpage">
                                <div className="row gap-xl-0 gap-5 bonusSection">
                                    <div className="col-xl-6">
                                        <div className="row mx-0 gap-xl-5 gap-3 align-items-center justify-content-xl-start justify-content-center">
                                            <div className="col-12 px-0 cardContent text-xl-start text-center">
                                                <div className="subheading">Fast &amp; Easy Way to get started</div>
                                                <div className="heading">Up to <span>300%</span> Deposit Bonus</div>
                                            </div>
                                            <div className="col-auto px-0 pt-sm-3 pt-2">
                                                <a href="#" className="text-decoration-none cardBtn">Deposite</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="row mx-0 gap-xl-4 gap-lg-3 justify-content-center">
                                            <div className="col-12 px-0">
                                                <div className="row mx-0 align-items-center justify-content-center g-3">
                                                    <div className="col-auto ">
                                                        <div className="logos d-flex align-items-center"><img src="assets/img/applePay.png" alt="applepay" /></div>
                                                    </div>
                                                    <div className="col-auto ">
                                                        <div className="logos d-flex align-items-center"><img src="assets/img/googlePay.png" alt="googlePay" /></div>
                                                    </div>
                                                    <div className="col-auto ">
                                                        <div className="logos d-flex align-items-center"><img src="assets/img/visaCard.png" alt="visa" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 pt-2 px-0">
                                                <div className="row mx0 g-2 align-items-center justify-content-center">
                                                    <div className="col-xl-6 col-sm-auto col-6">
                                                        <div className="logos2 d-flex align-items-center gpay"><img src="assets/img/ppay.png" alt="samsungpay" /></div>
                                                    </div>
                                                    <div className="col-auto ">
                                                        <div className="logos2 d-flex align-items-center"><img src="assets/img/mas.png" alt="Mastercard" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card section end  */}
                        <GameTabs />
                        {/* top-rated-games section start */}
                        {/* table start */}
                        <DambleTable />
                        {/* ******* [ Register Section Start ] ********** */}
                        <div className="registerSection mt-5 d-lg-block d-none">
                            <div className="innerfluid">
                                <div className="row">
                                    <div className="col-12 px-0"><img src="assets/img/registerBanner.png" className="w-100" alt="" /></div>
                                    {/* <div class="col-6">
                          <div class="registerHeading"><span>Register</span> now to instantly</div>
                          <div class="mainHeading">Redeem your Deposit Bonus!</div>
                          <div class="subHeading">Deposit bonus up to $20,000</div>
                      </div> */}
                                    <div className="signUp px-0"><button className="greenBtn border-0">Sign Up</button></div>
                                </div>
                            </div>
                        </div>
                        {/* ******* [ Register Section End ] ********** */}
                        {/* recommand start */}
                        <div className="toprated-games-main position-relative mb-5">
                            <div className="toprated-games">
                                <div className="row position-relative">
                                    <div className="col-12 px-0">
                                        <div className="row mx-0 align-items-center">
                                            <div className="col heading">Recommended Games</div>
                                            <div className="col-auto ps-0 d-md-none d-block viewallMain">
                                                <a href="javascript:;" className="btn viewall-btn fw-semibold border-0">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 games-card-main">
                                        <div className="swiper mySwiper cardSwiper">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center gap-3 d-md-none d-block">
                                                            Evolution
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4 position-relative">
                                                            <img src="assets/img/index/card-icon1.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                            <div className="games-img-tag fw-semibold position-absolute end-0 top-0 d-flex justify-content-center align-items-center">New</div>
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center gap-3 d-md-none d-block">
                                                            NolimitCity
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4">
                                                            <img src="assets/img/index/card-icon2.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center d-md-none d-block gap-3">
                                                            Pragmatic Play
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4 position-relative">
                                                            <img src="assets/img/index/card-icon3.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                            <div className="games-img-tag fw-semibold position-absolute end-0 top-0 d-flex justify-content-center align-items-center">New</div>
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center d-md-none d-block gap-3">
                                                            Pragmatic Play
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4 position-relative">
                                                            <img src="assets/img/index/card-icon4.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                            <div className="games-img-tag fw-semibold position-absolute end-0 top-0 bg-success d-flex justify-content-center align-items-center">Top</div>
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-md-none d-block d-flex align-items-center gap-3">
                                                            Evolution
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4">
                                                            <img src="assets/img/index/card-icon5.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-md-none d-block d-flex align-items-center gap-3">
                                                            Evolution
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4">
                                                            <img src="assets/img/index/card-icon6.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center gap-3 d-md-none d-block">
                                                            Evolution
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4 position-relative">
                                                            <img src="assets/img/index/card-icon1.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                            <div className="games-img-tag fw-semibold position-absolute end-0 top-0 d-flex justify-content-center align-items-center">New</div>
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center gap-3 d-md-none d-block">
                                                            NolimitCity
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4">
                                                            <img src="assets/img/index/card-icon2.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center d-md-none d-block gap-3">
                                                            Pragmatic Play
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4 position-relative">
                                                            <img src="assets/img/index/card-icon3.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                            <div className="games-img-tag fw-semibold position-absolute end-0 top-0 d-flex justify-content-center align-items-center">New</div>
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-flex align-items-center d-md-none d-block gap-3">
                                                            Pragmatic Play
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4 position-relative">
                                                            <img src="assets/img/index/card-icon4.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                            <div className="games-img-tag fw-semibold position-absolute end-0 top-0 bg-success d-flex justify-content-center align-items-center">Top</div>
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-md-none d-block d-flex align-items-center gap-3">
                                                            Evolution
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4">
                                                            <img src="assets/img/index/card-icon5.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide ">
                                                    <div className="games-card h-100">
                                                        <div className="games-information fw-semibold d-md-none d-block d-flex align-items-center gap-3">
                                                            Evolution
                                                            <span className="games-information-icon d-inline-flex justify-content-center align-items-center">
                                                                <img src="assets/img/index/information.png" alt="information" className="h-100 w-100 img-fluid" />
                                                            </span>
                                                        </div>
                                                        <div className="games-img rounded-4">
                                                            <img src="assets/img/index/card-icon6.png" alt="card" className="h-100 w-100 img-fluid rounded-4" />
                                                        </div>
                                                        <div className="text-center games-card-title fw-semibold d-md-block d-none">Push Gaming</div>
                                                        <div className="text-center">
                                                            <a href="javascript:;" className="btn text-decoration-none play-btn fw-bold rounded-3 d-inline-flex justify-content-center align-items-center " type="button">Play Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-button-prev-unique p-0 d-md-none d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/prev.png" alt="prev" className="h-100 w-100 img-fluid" /></div>
                                            <div className="swiper-button-next-unique p-0 d-md-none d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/next.png" alt="next" className="h-100 w-100 img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* recommand end */}
                        {/* card start */}
                        <AboutCards />
                        {/* card end */}
                    </div>
                </div>
                {/*  **** Footer section *** */}
                <AppFooter />
            </main>
            {/* modal start1 */}

            {/* <SignUp /> */}

            {/* modal end */}
            {/* modal start2 */}
            {/* <SignIn /> */}
        </>

    )
};

export default Casino;
