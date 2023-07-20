import React from "react";
import { useLocation } from "react-router-dom";
import { ROUTES_CONST } from "../../constants/routeConstant";

const AppFooter = () => {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className="footerSection ">
            {/* help us section start */}
            {
                location.pathname === ROUTES_CONST.CASINO ? (
                    <div className="container-fluid help-us footer helpSection pb-5">
                        <div className="row">
                            <div className="col-md-6 helpus-left">
                                <div className="row">
                                    <div className="help-us-heading fw-bold col-12 text-md-start text-center">Online Casinos,
                                        what you need to know.</div>
                                    <div className="col-12 help-us-para fw-medium help-us-paratwo">
                                        With the growth Online Gambling has seen in the past few years, it's safe to say
                                        that
                                        there is no shortage of possibilities or demand in the market. As of 2023, there are
                                        thousands upon thousands to choose from. Standing out in this crowded space
                                        depends on user's preferences and the payment methods the casino offers.
                                    </div>
                                    <div className="col-12 help-us-para pt-2 fw-medium">
                                        Since players are constantly seeking new experiences, enhancing and expand the
                                        igaming
                                        industry, Allowing the player to concentrate on the games themselves, providing
                                        state of
                                        art graphics, a variety of entertaining games and various payment methods will
                                        guarantee
                                        enjoyment, trust and a real Casino experience.
                                    </div>
                                    <div className="col-12 help-us-para pt-2 fw-medium">
                                        Hence, in this section, we'll tell you everything you need to know about a crypto
                                        casino.
                                    </div>
                                    <div className="col-12 showmore-btn-main text-md-start text-center">
                                        <a href="javascript:;" className="btn showmore-btn fw-semibold p-0 border-0">Show More
                                            <span className="showMore">&gt;&gt;</span>
                                            {/* <span class="d-md-none d-block"><img src="assets/img/index/showmore.png" alt="show more"></span>
                                  </a> */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 helpus-right position-relative ">
                                <div className="row mx-0">
                                    <div className="help-us-heading fw-bold col-12 text-md-start text-center">Help us improve
                                        your experience</div>
                                    <div className="col-12 help-us-textarea">
                                        <textarea name="textarea" id="textarea" className="form-control shadow-none fw-normal text-area" placeholder="If you have any recommendations please leave your message and our team will work on it." defaultValue={""} />
                                        <div className="textarea-title fw-semibold text-end d-md-block d-none">Thank you for
                                            your feedback</div>
                                    </div>
                                    <div className="col-12 text-md-start text-center">
                                        <button className="btn fw-semibold leavemsg-btn border-0">Leave message</button>
                                    </div>
                                    <div className="col-12 helpus-email-main fw-bold text-md-start text-center">
                                        Or Email us:
                                        <a href="mailto:support@damble.iom" className="text-decoration-none helpus-email">support@damble.io</a>
                                    </div>
                                    <div className="col-12 d-md-none d-block text-center textarea-title fw-semibold">Thank you
                                        for your feedback</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<></>)
            }

            {/* help us section end */}
            {/* footer links */}
            <div className="container-fluid footer footerLinks pt-5">
                <div className="row cols-5 d-md-flex d-none">
                    <div className="col">
                        <ul className="linksUl list-unstyled">
                            <li className="linkLiHead">Casino</li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Casino Home</a>
                            </li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Slots</a></li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Live Casino</a>
                            </li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">New
                                Releases</a></li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Recommended</a>
                            </li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Table Game</a>
                            </li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">BlackJack</a>
                            </li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Roulette</a>
                            </li>
                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Baccarat</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="linksUl list-unstyled">
                            <li className="linkLiHead">Sports</li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Sports Home</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Live</a></li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Rules</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="linksUl list-unstyled">
                            <li className="linkLiHead">Promo</li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">VIP Club</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Affiliate</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Promotions</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Lottery</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Refer a
                                friend</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="linksUl list-unstyled">
                            <li className="linkLiHead">Support/Legal</li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none"> Help center</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Gamble Aware</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Fairness</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">FAQ</a> </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Privacy</a>
                            </li>
                            <li><a href="javascripty:;" className="linkLi text-decoration-none">Terms Of Service</a>
                            </li>
                            <li><a href="javascripty:;" className="linkLi text-decoration-none">Self-exclusion</a> </li>
                            <li><a href="javascripty:;" className="linkLi text-decoration-none">AML</a> </li>
                            <li><a href="javascripty:;" className="linkLi text-decoration-none">Design Resources</a>
                            </li>
                            <li><a href="javascripty:;" className="linkLi text-decoration-none">APP</a> </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="linksUl list-unstyled">
                            <li className="linkLiHead">About us</li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">News</a> </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Work with us</a>
                            </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Business
                                Contacts</a> </li>
                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Help Desk</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row accordionFooter d-md-none d-flex">
                    <div className="col-12">
                        <div className="accordion rounded-0" id="accordionExampleFooter">
                            <div className="accordion-item border-0 shadow-none">
                                <h2 className="accordion-header">
                                    <button className="accordion-button position-relative border-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFooterOne" aria-expanded="false" aria-controls="collapseFooterOne">
                                        Casino
                                    </button>
                                </h2>
                                <div id="collapseFooterOne" className="accordion-collapse accordionCollapse collapse show" data-bs-parent="#accordionExampleFooter">
                                    <div className="accordion-body">
                                        <ul className="linksUl list-unstyled mb-0">
                                            {/* <li class="linkLiHead">Casino</li> */}
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Casino Home</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Slots</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Live Casino</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">New Releases</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Recommended</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Table Game</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">BlackJack</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Roulette</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Baccarat</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 shadow-none">
                                <h2 className="accordion-header">
                                    <button className="accordion-button position-relative border-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFooterTwo" aria-expanded="false" aria-controls="collapseFooterTwo">
                                        Sports
                                    </button>
                                </h2>
                                <div id="collapseFooterTwo" className="accordion-collapse accordionCollapse collapse show" data-bs-parent="#accordionExampleFooter">
                                    <div className="accordion-body">
                                        <ul className="linksUl list-unstyled mb-0">
                                            {/* <li class="linkLiHead">Casino</li> */}
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Sports Home</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Live</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Rules</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 shadow-none">
                                <h2 className="accordion-header">
                                    <button className="accordion-button position-relative border-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFooterThree" aria-expanded="false" aria-controls="collapseFooterThree">
                                        Promo
                                    </button>
                                </h2>
                                <div id="collapseFooterThree" className="accordion-collapse accordionCollapse collapse show" data-bs-parent="#accordionExampleFooter">
                                    <div className="accordion-body">
                                        <ul className="linksUl list-unstyled mb-0">
                                            {/* <li class="linkLiHead">Casino</li> */}
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Vip Club</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Affiliate&gt;</a></li><a href="javascript:;" className="linkLi text-decoration-none">
                                            </a><li className><a href="javascript:;" className="linkLi text-decoration-none"> </a><a href="javascript:;" className="linkLi text-decoration-none">Promotions&gt;</a></li><a href="javascript:;" className="linkLi text-decoration-none">
                                            </a><li className><a href="javascript:;" className="linkLi text-decoration-none"> </a><a href="javascript:;" className="linkLi text-decoration-none">Lottery</a></li>
                                            <li className> <a href="javascript:;" className="linkLi text-decoration-none">Refer a friend</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 shadow-none">
                                <h2 className="accordion-header">
                                    <button className="accordion-button position-relative border-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFooterFour" aria-expanded="false" aria-controls="collapseFooterFour">
                                        Support/Legal
                                    </button>
                                </h2>
                                <div id="collapseFooterFour" className="accordion-collapse accordionCollapse collapse show" data-bs-parent="#accordionExampleFooter">
                                    <div className="accordion-body">
                                        <ul className="linksUl list-unstyled mb-0">
                                            {/* <li class="linkLiHead">Casino</li> */}
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">
                                                Help center</a></li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Gamble Aware</a> </li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Fairness</a> </li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">FAQ</a> </li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Privacy</a> </li>
                                            <li className><a href="javascripty:;" className="linkLi text-decoration-none">Terms Of Service</a> </li>
                                            <li className><a href="javascripty:;" className="linkLi text-decoration-none">Self-exclusion</a> </li>
                                            <li className><a href="javascripty:;" className="linkLi text-decoration-none">AML</a> </li>
                                            <li className><a href="javascripty:;" className="linkLi text-decoration-none">Design Resources</a> </li>
                                            <li className><a href="javascripty:;" className="linkLi text-decoration-none">APP</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 shadow-none">
                                <h2 className="accordion-header">
                                    <button className="accordion-button position-relative border-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFooterFive" aria-expanded="false" aria-controls="collapseFooterFive">
                                        About us
                                    </button>
                                </h2>
                                <div id="collapseFooterFive" className="accordion-collapse accordionCollapse collapse show" data-bs-parent="#accordionExampleFooter">
                                    <div className="accordion-body">
                                        <ul className="linksUl list-unstyled mb-0">
                                            {/* <li class="linkLiHead">Casino</li> */}
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">News</a> </li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Work with us</a> </li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Business Contacts</a> </li>
                                            <li className><a href="javascript:;" className="linkLi text-decoration-none">Help Desk</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="borderd mt-5" />
                <div className="footerrSection mt-5">
                    <div className="row gap-md-5 gap-4">
                        {/* <div class='col-10 mx-auto'><div class='borderd'></div></div> */}
                        <div className="col-12">
                            <div className="cryptoLogo card border-0 shadow-none">
                                <div className="card-body">
                                    <div className="row mx-0 gx-0 align-items-center">
                                        <div className="col">
                                            <div className="row mx-0 justify-content-center align-items-center g-3">
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/crypto.png" alt="Crypto" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/Ethereum_logo.png" alt="Ethereum" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/tether-usdt-logo.png" alt="Tether" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/xcrypto.png" alt="Xcrypto" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/Polkadot-Symbol.png" alt="Plokadot" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/matic-logo.png" alt="Matic" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/dogecoin-doge-logo.png" alt="Dogicoin" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/solana-sol-logo.png" alt="Solana" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/bnb-bnb-logo.png " alt="Bnb" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/cardano_ada-512.png" alt="Cardano" /></div>
                                                </div>
                                                <div className="col-lg col-auto">
                                                    <div className="logos"><img src="assets/img/usd-coin-usdc-logo.png" alt="UsdCoin" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-auto mt-lg-0 mt-lg-0 mt-3">
                                            <div className="row mx-0 align-items-center justify-content-center">
                                                <div className="col-auto"><button type="button" className="ragisterBtn d-flex align-items-center justify-content-center text-white border-0 px-3 mx-md-0 mx-auto mt-md-0 mt-4">Deposit</button>
                                                </div>
                                                <div className="col-auto"><button type="button" className="ragisterBtn ragisterBtn1 d-flex align-items-center justify-content-center text-white border-0 px-3 mx-md-0 mx-auto mt-md-0 mt-4">Buy
                                                    Crypto</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center text-white paymentHeading text-uppercase py-2">payment
                            methods</div>
                        <div className="col-xxl-10 col-12 mx-auto mb5 pb3 d-lg-block d-none">
                            <div className="cardLogo card border-0 shadow-none">
                                <div className="card-body">
                                    <div className="row mx-0 justify-content-center align-items-center gx-0">
                                        <div className="col px-0 d-md-block d-none">
                                            <div className="logos"><img src="assets/img/Ethereum_logo.png" alt="Ethereum" /></div>
                                        </div>
                                        <div className="col px-0 d-md-block d-none">
                                            <div className="logos"><img src="assets/img/2.png" alt="Metamask" /></div>
                                        </div>
                                        <div className="col px-0">
                                            <div className="logos"><img src="assets/img/crypto.png" alt="Crypto" /></div>
                                        </div>
                                        <div className="col d-md-block d-none">
                                            <div className="logos"><img src="assets/img/samsungpay.png" alt="Sumsung" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="logos"><img src="assets/img/mastercard.png" alt="MasterCard" /></div>
                                        </div>
                                        <div className="col">
                                            <div className="logos"><img src="assets/img/applepay.png" alt="ApplePay" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="logos"><img src="assets/img/googlePay.png" alt="GooglePay" /></div>
                                        </div>
                                        <div className="col">
                                            <div className="logos"><img src="assets/img/visa.png" alt="VisaCard" /></div>
                                        </div>
                                        <div className="col d-md-none d-block">
                                            <div className="logos"><img src="assets/img/solana-sol-logo.png" alt="Sumsung" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-lg5 mt-md-4 mt-3 mb-lg-3">
                            <ul className="list-unstyled navContent d-flex align-items-center justify-content-md-center justify-content-between gap-xl-5 gap-sm-4 gap-2  m-0">
                                <li className="navLink fw-semibold text-center text-white">About Us</li>
                                <li className="navLink fw-semibold text-center text-white">AML Policy</li>
                                <li className="navLink fw-semibold text-center text-white">Responsible Gambling</li>
                                <li className="navLink fw-semibold text-center text-white">Terms &amp; Condition</li>
                            </ul>
                        </div>
                        <div className="col-12 mb5">
                            <div className="bardcard card border-0 shadow-none">
                                <div className="card-body py-4">
                                    <div className="row mx-0 align-items-center gx-2">
                                        <div className="col-4 text-center">
                                            <div className="logos d-inlene-block"><img src="assets/img/gamecare.png" alt="GameCare" /></div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="logos d-inlene-block"><img src="assets/img/aware.png" alt="Aware" /></div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="logos d-inlene-block"><img src="assets/img/responsible.png" alt="Responsible" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12 mx-auto mb5">
                            <div className="democontent fw-normal text-center text-white">If you have any questions
                                about our AML and KYC Policy or if you have any complains about our AML and KYC
                                Policy or about the checks done on your Account and your Person, please contact us
                                By email: info@damble.io</div>
                        </div>
                        <div className="col-12 mx-auto">
                            <div className="borderd smBorderd" />
                        </div>
                        <div className="col-12 text-center">
                            <div className="logoImg d-inline-block"><img src="assets/img/logo.png" alt="Logo" /></div>
                            <div className="text-center copyright text-white mt-md-4 mt-3">Copyright © 2023 Damble. All
                                rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* *Footer */}
            <div className="container-fluid footer d-none">
                <div className="footerrSection my-5">
                    <div className="row gap-md-5 gap-4">
                        {/* <div class='col-10 mx-auto'><div class='borderd'></div></div> */}
                        <div className="col-12">
                            <div className="cryptoLogo card border-0 shadow-none">
                                <div className="card-body">
                                    <div className="row mx-0 gx-0 align-items-center">
                                        <div className="col">
                                            <div className="row mx-0 justify-content-center align-items-center g-3">
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/crypto.png" alt="Crypto" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/Ethereum_logo.png" alt="Ethereum" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/tether-usdt-logo.png" alt="Tether" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/xcrypto.png" alt="Xcrypto" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/Polkadot-Symbol.png" alt="Plokadot" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/matic-logo.png" alt="Matic" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/dogecoin-doge-logo.png" alt="Dogicoin" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/solana-sol-logo.png" alt="Solana" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/bnb-bnb-logo.png " alt="Bnb" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/cardano_ada-512.png" alt="Cardano" /></div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="logos"><img src="assets/img/usd-coin-usdc-logo.png" alt="UsdCoin" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-auto mt-lg-0 mt-lg-5 mt-3">
                                            <div className="row mx-0 align-items-center justify-content-center" />
                                            <div className="col-auto"><button type="button" className="ragisterBtn d-flex align-items-center justify-content-center text-white border-0 px-3 mx-md-0 mx-auto mt-md-0 mt-4">Deposit</button>
                                            </div>
                                            <div className="col-auto"><button type="button" className="ragisterBtn ragisterBtn1 d-flex align-items-center justify-content-center text-white border-0 px-3 mx-md-0 mx-auto mt-md-0 mt-4">Buy
                                                Crypto</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center text-white paymentHeading text-uppercase py-2">payment methods
                    </div>
                    <div className="col-lg-10 col-12 mx-auto mb5 pb3">
                        <div className="cardLogo card border-0 shadow-none">
                            <div className="card-body ">
                                <div className="row mx-0 justify-content-center align-items-center gap-2">
                                    <div className="col-auto px-0 d-md-block d-none">
                                        <div className="logos"><img src="assets/img/Ethereum_logo.png" alt="Ethereum" />
                                        </div>
                                    </div>
                                    <div className="col-auto px-0 d-md-block d-none">
                                        <div className="logos"><img src="assets/img/2.png" alt="Metamask" /></div>
                                    </div>
                                    <div className="col-auto px-0">
                                        <div className="logos"><img src="assets/img/crypto.png" alt="Crypto" /></div>
                                    </div>
                                    <div className="col-auto d-md-block d-none">
                                        <div className="logos"><img src="assets/img/samsungpay.png" alt="Sumsung" /></div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="logos"><img src="assets/img/mastercard.png" alt="MasterCard" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="logos"><img src="assets/img/applepay.png" alt="ApplePay" /></div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="logos"><img src="assets/img/googlePay.f19216be916d760adc2eb8b383c4f392.png" alt="GooglePay" /></div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="logos"><img src="assets/img/visa.png" alt="VisaCard" /></div>
                                    </div>
                                    <div className="col-auto d-md-none d-block">
                                        <div className="logos"><img src="assets/img/solana-sol-logo.png" alt="Sumsung" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-lg5 mt-md-4 mt-3 mb-lg-3">
                        <ul className="list-unstyled navContent d-flex align-items-center justify-content-md-center justify-content-between gap-xl-5 gap-sm-4 gap-2  m-0">
                            <li className="navLink fw-semibold text-center text-white">About Us</li>
                            <li className="navLink fw-semibold text-center text-white">AML Policy</li>
                            <li className="navLink fw-semibold text-center text-white">Responsible Gambling</li>
                            <li className="navLink fw-semibold text-center text-white">Terms &amp; Condition</li>
                        </ul>
                    </div>
                    <div className="col-12 mb5">
                        <div className="bardcard card border-0 shadow-none">
                            <div className="card-body py-4">
                                <div className="row mx-0 align-items-center gx-2">
                                    <div className="col-4 text-center">
                                        <div className="logos d-inlene-block"><img src="assets/img/gamecare.png" alt="GameCare" /></div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="logos d-inlene-block"><img src="assets/img/aware.png" alt="Aware" /></div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="logos d-inlene-block"><img src="assets/img/responsible.png" alt="Responsible" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 mx-auto mb5">
                        <div className="democontent fw-normal text-center text-white">If you have any questions about
                            our AML and KYC Policy or if you have any complains about our AML and KYC Policy or
                            about the checks done on your Account and your Person, please contact us By email:
                            info@damble.io</div>
                    </div>
                    <div className="col-lg-10 mx-auto">
                        <div className="borderd smBorderd" />
                    </div>
                    <div className="col-12 text-center">
                        <div className="logoImg d-inline-block"><img src="assets/img/logo.png" alt="Logo" /></div>
                        <div className="text-center copyright text-white mt-md-4 mt-3">Copyright © 2023 Damble. All
                            rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AppFooter;
