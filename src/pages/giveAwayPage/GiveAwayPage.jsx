import React from "react";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppSideBar from "../../components/AppSideBar/AppSideBar";

const GiveAwayPage = () => {
    return (
        <>
            <AppSideBar />
            <main className="main vh-100" id="main">
                <div className="mainContaint giveWayFluidWrapper">
                    <div className="container-fluid giveWayFluid">
                        <div className="row mx-0">
                            <div className="col-12 px-0">
                                <div className="heroImg d-sm-block d-none">
                                    <img src="assets/img/givewayImg/hero-image.png" alt />
                                </div>
                                <div className="mHeroBg d-block d-sm-none">
                                    <img src="assets/img/givewayImg/mbg.png" alt />
                                </div>
                            </div>
                            <div className="col-12 heroTxt">
                                Join <span>GIVEAWAY</span> and get a lot of rewards!
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid prizeFluid">
                        <div className="row mx-0 position-relative">
                            <div className="col-md-6 col-12">
                                <div className="row prizeFluidInner">
                                    <div className="col-12 prizeTxt">Your Prize From <span>DAMBLE</span></div>
                                    <div className="col-12 para">Show your betting power &amp; get a chance to win a Lamborghini Huracan, a trip to your favorite destination or a bonus box!* Place bets and use all your luck to win!</div>
                                    <div className="col-12">
                                        <a href="javascript:;" className="text-decoration-none moreAnchor">More details &gt;&gt;</a>
                                    </div>
                                    <div className="col-12">
                                        <div className="imgageBox">
                                            <div className="car">
                                                <img src="assets/img/givewayImg/car.png" alt />
                                            </div>
                                            <div className="kit">
                                                <img src="assets/img/givewayImg/gambling kit.png" alt />
                                            </div>
                                            <div className="goldBox">
                                                <img src="assets/img/givewayImg/gold box.png" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 mt-md-0 mt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="tableWrapper">
                                            <table className="giveTable table mb-0">
                                                <thead className="giveTbaleHead">
                                                    <tr>
                                                        <th className="tableHead">Place</th>
                                                        <th className="tableHead">Player,wager</th>
                                                        <th className="tableHead">Prize</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="mt-3">
                                                    <tr>
                                                        <td><div className="tprophy"><img src="assets/img/tableTrophy1.png" alt /></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                <img src="assets/img/LamborghiniLogo.png" alt />
                                                                <span className="text-white spanTxt">Lamborghini</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="tprophy"><img src="assets/img/tableTrophy2.png" alt /></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                {/* <img src="assets/img/LamborghiniLogo.png" alt=""> */}
                                                                <span className="text-white">$200,000</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="tprophy"><img src="assets/img/tableTrophy3.png" alt /></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                {/* <img src="assets/img/LamborghiniLogo.png" alt=""> */}
                                                                <span className="text-white">$200,000</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="tprophy"><div className="number">4</div></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                {/* <img src="assets/img/LamborghiniLogo.png" alt=""> */}
                                                                <span className="text-white">$200,000</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="tprophy"><div className="number">5</div></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                {/* <img src="assets/img/LamborghiniLogo.png" alt=""> */}
                                                                <span className="text-white">$200,000</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="tprophy"><div className="number">6</div></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                {/* <img src="assets/img/LamborghiniLogo.png" alt=""> */}
                                                                <span className="text-white">$200,000</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="tprophy"><div className="number">7</div></div></td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-auto"><div className="userImg"><img src="assets/img/givewayImg/tableUser.png" alt /></div></div>
                                                                <div className="col">
                                                                    <div className="row">
                                                                        <div className="col-12 tableTxt text-white">username</div>
                                                                        <div className="col-12 tableTxt1">$47,353,783</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="lamborgini">
                                                                {/* <img src="assets/img/LamborghiniLogo.png" alt=""> */}
                                                                <span className="text-white">$200,000</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <div className="button text-center">
                                                                <button className="TableBtn">Full Table</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="dumble">
                                    <img src="assets/img/givewayImg/giveWaySub.png.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  **** Footer section *** */}
                    <div className="footerSection ">
                        {/* help us section start */}
                        {/* footer links */}
                        {/* *Footer */}
                        {/* mobile bottom bar start */}
                        <div className="container-fluid bottomBarFluid d-md-none d-block">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <div className="bottomBar">
                                        <div className=" row justify-content-around align-items-center mx-0">
                                            <div className="col-auto">
                                                <a href="javascript:;" className="bottomAnchor">
                                                    <div className="iconParent"><img src="assets/img/givewayImg/allGamesMenu.png" alt /></div>
                                                    <div className="linkTxt">Menu</div>
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a href="javascript:;" className="bottomAnchor">
                                                    <div className="iconParent"><img src="assets/img/givewayImg/casinoVector.png" alt /></div>
                                                    <div className="linkTxt">Casino</div>
                                                </a>
                                            </div>
                                            <div className="col-auto d-flex justify-content-center align-items-center flex-column blurBg">
                                                <a href="javascript:;" className="bottomAnchor bottomAnchorMain d-flex align-items-center justify-content-center col-12">
                                                    <div className="iconParent"><img src="assets/img/givewayImg/walletVector.png" alt /></div>
                                                </a>
                                                <div className="linkTxt col-12">Wallet</div>
                                            </div>
                                            <div className="col-auto">
                                                <a href="javascript:;" className="bottomAnchor">
                                                    <div className="iconParent"><img src="assets/img/givewayImg/sportsVector.png" alt /></div>
                                                    <div className="linkTxt">Sports</div>
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a href="javascript:;" className="bottomAnchor">
                                                    <div className="iconParent"><img src="assets/img/givewayImg/msgVector.png" alt /></div>
                                                    <div className="linkTxt">Chat room</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mobile bottom bar end */}
                    </div>

                </div>
                <AppFooter />
            </main>

        </>

    )
};

export default GiveAwayPage;
