import React from "react";

const GameTabs = () => {
    return (
        <>
            {/* ***** [ Navtab start ] ***** */}
            <div className=" topratedgames-tab-main position-relative">
                <div className="topratedgames-tab-content">
                    <div className="row">
                        <div className="col">
                            <div className="nav nav-tabs border-0 gap-3" id="nav-tab" role="tablist">
                                <button className="nav-link toprated-link fw-semibold active" id="nav-allgames-tab" data-bs-toggle="tab" data-bs-target="#nav-allgames" type="button" role="tab" aria-controls="nav-allgames" aria-selected="true">All Games</button>
                                <button className="nav-link toprated-link fw-semibold" id="nav-inhouse-tab" data-bs-toggle="tab" data-bs-target="#nav-inhouse" type="button" role="tab" aria-controls="nav-inhouse" aria-selected="false">In-House</button>
                                <button className="nav-link toprated-link fw-semibold" id="nav-Slots-tab" data-bs-toggle="tab" data-bs-target="#nav-Slots" type="button" role="tab" aria-controls="nav-Slots" aria-selected="false">Slots</button>
                                <button className="nav-link toprated-link fw-semibold" id="nav-Live-tab" data-bs-toggle="tab" data-bs-target="#nav-Live" type="button" role="tab" aria-controls="nav-Live" aria-selected="false">Live</button>
                                <button className="nav-link toprated-link fw-semibold" id="nav-Special-tab" data-bs-toggle="tab" data-bs-target="#nav-Special" type="button" role="tab" aria-controls="nav-Special" aria-selected="false">Special</button>
                            </div>
                        </div>
                        <div className="col-auto">
                            <form action="javascript:;">
                                <div className="input-group rounded-5 search-bar-group border-1 border">
                                    <input type="text" className="form-control search-input fw-semibold shadow-none bg-transparent border-0 rounded-0" placeholder="Search for games" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="input-group-text bg-transparent border-0" id="basic-addon2">
                                        <img src="assets/img/index/search-icon.png" alt="search-icon" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* <div class="col-12 heading">Top Rated Games</div> */}
                    </div>
                </div>
            </div>
            {/* ***** Navtab end ******/}
            {/* ***** top-rated-games section start ******/}
            <div className="tab-content" id="nav-tabContent">
                {/* ***** all games tab start ******/}
                <div className="tab-pane fade show active" id="nav-allgames" role="tabpanel" aria-labelledby="nav-allgames-tab" tabIndex={0}>
                    {/* ***** top-rated-games section 1 start ******/}
                    <div className=" toprated-games-main position-relative">
                        <div className="toprated-games">
                            <div className="row position-relative">
                                <div className="col-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col heading">Top Rated Games</div>
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
                    {/****** top-rated-games section 1 end */}
                    {/****** recent-big-wins section  start */}
                    <div className=" toprated-games-main recentWin position-relative">
                        <div className="toprated-games">
                            <div className="row position-relative">
                                <div className="col-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col heading shadowball position-relative">Recent Big Wins</div>
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
                    {/****** recent-big-wins section  end */}
                </div>
                {/****** all games tab end */}
                {/****** In-House tab start */}
                <div className="tab-pane fade" id="nav-inhouse" role="tabpanel" aria-labelledby="nav-inhouse-tab" tabIndex={0}>
                    <div className="container-fluid toprated-games-main position-relative">
                        <div className="toprated-games">
                            <div className="row position-relative">
                                <div className="col-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col heading">Top Rated Games</div>
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
                    </div>&gt;
                </div>
                {/* In-House tab end */}
                {/* Slots tab start */}
                <div className="tab-pane fade" id="nav-Slots" role="tabpanel" aria-labelledby="nav-Slots-tab" tabIndex={0}>
                    <div className="container-fluid toprated-games-main position-relative">
                        <div className="toprated-games">
                            <div className="row position-relative">
                                <div className="col-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col heading">Top Rated Games</div>
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
                </div>
                {/* Slots tab end */}
                {/* live tab start */}
                <div className="tab-pane fade" id="nav-Live" role="tabpanel" aria-labelledby="nav-Live-tab" tabIndex={0}>
                    <div className="container-fluid toprated-games-main position-relative">
                        <div className="toprated-games">
                            <div className="row position-relative">
                                <div className="col-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col heading">Top Rated Games</div>
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
                </div>
                {/* live tab end */}
                {/* special tab start */}
                <div className="tab-pane fade" id="nav-Special" role="tabpanel" aria-labelledby="nav-Special-tab" tabIndex={0}>
                    <div className="container-fluid toprated-games-main position-relative">
                        <div className="toprated-games">
                            <div className="row position-relative">
                                <div className="col-12 px-0">
                                    <div className="row mx-0 align-items-center">
                                        <div className="col heading">Top Rated Games</div>
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
                </div>
                {/* special tab end */}
            </div>
        </>
    );
};

export default GameTabs;
