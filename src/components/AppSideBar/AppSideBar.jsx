import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES_CONST } from "../../constants/routeConstant";

const AppSideBar = () => {
    const navigate = useNavigate()
    return (
        <aside className="sidebar position-fixed">
            <div className="row pt-3 sidebar-menu">
                <div className="col-12 topBodyPart">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <div onClick={() => navigate(ROUTES_CONST.GIVEAWAY)} style={{ cursor: 'pointer' }} className="givway text-center">
                                <img src="assets/img/giveway.png" alt="" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row g-2">
                                <div className="col-6 ">
                                    <div className="ii position-relative" style={{ cursor: 'pointer' }}>
                                        <img src="assets/img/whilespiner.png" alt="" />
                                        <div className="txt"><span claas="orange">WHEEL</span> SPIN</div>
                                    </div>
                                </div>
                                <div className="col-6 " style={{ cursor: 'pointer' }}>
                                    <div className="ii position-relative">
                                        <img src="assets/img/caseback.png" alt="" />
                                        <div className="txt"><span className="yellow">WHEEL</span> SPIN</div>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="ii position-relative" style={{ cursor: 'pointer' }}>
                                        <img src="assets/img/referearn.png" alt="" />
                                        <div className="txt"><span className="green">WHEEL</span> SPIN</div>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="ii position-relative" style={{ cursor: 'pointer' }}>
                                        <img src="assets/img/referearn.png" alt="" />
                                        <div className="txt"><span className /> SPIN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 side-bar-content">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border-0">
                            <a href="javascript:;" className="sidebar-card-heading accordion-button fw-bold d-flex bg-transparent p-0 align-items-center gap-1 text-decoration-none shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="sidebar-card-img d-inline-flex"><img src="assets/img/index/casino-chip.png" alt="casino-chip" className="h-100 w-100 img-fluid" /></span>
                                Casino Games
                            </a>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <ul className="list-unstyled pt-2 gap-2 d-flex flex-column mb-0">
                                    <li>
                                        <a href="javascript:;" className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                            <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/berries1.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                            Picks For you
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                            <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/card-game1.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                            All games
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                            <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/recent.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                            Recent
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                            <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/lottery.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                            Lottery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span className="line d-flex mx-auto" />
                    </div>
                    <ul className="list-unstyled pt-2 sportsLink gap-1 d-flex flex-column mb-0">
                        <li>
                            <NavLink to={ROUTES_CONST.SPORTS} className="text-decoration-none sidebar-card-title  fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center">
                                    <img src="assets/img/index/ball.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Sports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.VIP_CLUB} className=" text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center">
                                    <img src="assets/img/index/crown.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                <span className="vipText">VIP</span> Club
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.PROMOTIONS} className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center">
                                    <img src="assets/img/index/promoation.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Promotions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.AFFILIATE} className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/affiliate.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Affiliate
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.FAIRNESS} className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/fairness.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Fairness
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.FORUM} className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/blog.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Forum
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.BLOG} className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/blog.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES_CONST.NEWS} className="text-decoration-none sidebar-card-title fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/news.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                News
                            </NavLink>
                        </li>
                    </ul>
                    <span className="line d-flex mx-auto" />
                    <ul className="list-unstyled pt-2 sportsLink gap-1 d-flex flex-column mb-4">
                        <li>
                            <NavLink to={ROUTES_CONST.PARTNERS}>
                                <div className="ourpartner ps-4 ms-3 mb-5">Our Partners</div>
                            </NavLink>
                        </li>
                        <li>
                            <a href="javascript:;" className="text-decoration-none sidebar-card-title livesupport fw-semibold d-flex align-items-center gap-2">
                                <span className="sidebar-card-icon d-inline-flex align-items-center justify-content-center"><img src="assets/img/index/support.png" alt="picks for you" className="h-100 w-100 img-fluid " /></span>
                                Live support
                            </a>
                        </li>
                    </ul>
                    <div className="pt-5 pb-4"><span className="line d-flex mx-auto" /></div>
                    <div className="join">
                        <div className="row row-cols-5 pb-5 gy-3">
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/instagram.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/telegram.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/twitter.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/snapchat.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/tik-tok.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/reddit.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/vactor.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/youTube.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/bitcoin.png" alt /></a></div>
                            <div className="col"><a href="javascript:;" className="linksIcons"><img src="assets/img/printrest.png" alt /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

    );
};

export default AppSideBar;
