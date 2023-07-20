import React from "react";
import Footer from "../../components/footer/Footer";
import AppFooter from "../../components/AppFooter/AppFooter";

const AffiliateDashboard = () => {
    return (
        <>
            <aside className="sidebar position-fixed">
                <div className="row pt-3 sidebar-menu h-100">
                    <div className="col-12">
                        <div className="sidbarLinks">
                            <ul className="list-unstyled sideBarUl">
                                <li className="sidebarLi d-flex align-items-center justify-content-start active mb-2"><a href="javascript:;" className="liAnchor text-decoration-none"><img src="assets/img/affiliateDashboard/referral-code.png" alt />Referral Code</a>
                                </li>
                                <li className="sidebarLi d-flex align-items-center justify-content-start mb-2"><a href="javascript:;" className="liAnchor text-decoration-none"><img src="assets/img/affiliateDashboard/banners.png" alt />Banners Download</a>
                                </li>
                                <li className="sidebarLi d-flex align-items-center justify-content-start mb-2"><a href="javascript:;" className="liAnchor text-decoration-none"><img src="assets/img/affiliateDashboard/friends.png" alt />Friends Management</a>
                                </li>
                                <li className="sidebarLi d-flex align-items-center justify-content-start mb-2"><a href="javascript:;" className="liAnchor text-decoration-none"><img src="assets/img/affiliateDashboard/commision.png" alt />Commission Rewards</a>
                                </li>
                                <li className="sidebarLi d-flex align-items-center justify-content-start mb-2"><a href="javascript:;" className="liAnchor text-decoration-none"><img src="assets/img/affiliateDashboard/usdReward.png" alt />USD Rewards</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 borderLine mt-auto">
                        <button className="forumBtn px-3 py-2 d-flex align-items-center justify-content-center"><img src="assets/img/affiliateDashboard/forum-message.png" alt />Forum</button>
                    </div>
                    <div className="col-12">
                        <select className="form-select formSelect" aria-label="Default select example">
                            <option selected>English</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        <button className="telegramBtn">Telegram <img src="assets/img/affiliateDashboard/telegram (3).png" alt /></button>
                    </div>
                </div>
            </aside>

            <main className="main vh-100" id="main">
                <div className="mainContaint afflitiateDashboard">
                    <div className="row gap-3">
                        <div className="col-12">
                            <div className="col-12 mb-3">
                                <div className="refferal open d-sm-none d-block">
                                    <div className="row mx-0">
                                        <div className="col d-flex align-items-center">
                                            <div className="refferalImg"><img src="assets/img/affiliateDashboard/referral-code.png" alt /></div>
                                            <span className="txt ms-2">Referral Code</span>
                                        </div>
                                        <div className="col-auto">
                                            <div className="down"><img src="assets/img/affiliateDashboard/down-chevron.png" alt /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="outerCard outerPadding">
                                <div className="row gap-3">
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <button className="generateBtn px-4">Generate My Code</button>
                                        </div>
                                    </div>
                                    <div className="col-12 d-sm-none d-block">
                                        <div className="innerCard d-flex justify-content-center flex-column py-4">
                                            <button className="generateBtn generateBtn1 px-4">Create New Code</button>
                                            <div className="mtxt">1 / 20 Created</div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <div className="row innerPadding align-items-center">
                                                <div className="col-xl-4 col-12">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked />
                                                                <span className="slider round" />
                                                            </label>
                                                        </div>
                                                        <div className="col">
                                                            <div className="txt">Send welcome message to my new friend automatically</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-12 mt-xl-0 mt-2">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="box d-flex justify-content-start">
                                                                <div className="txt">Welcome to DAMBLE! The world’s leading online crypto casino!
                                                                    We guarantee you will have great fun here! Feel free to contact me anytime if you need help. 😃</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button className="saveBtn px-3">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <div className="row tableRow">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table className="affiliateDashboardTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Code</th>
                                                                    <th>Link</th>
                                                                    <th>Commission Rate</th>
                                                                    <th>Date Created</th>
                                                                    <th>Registered Friends Number</th>
                                                                    <th>Total Commission Rewards</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className>
                                                                        <div className="box d-flex align-items-center">
                                                                            <span className="me-2">Example</span>
                                                                            <button className="border-0 bg-transparent copyBtn"><img src="assets/img/affiliateDashboard/copy.png" alt /></button>
                                                                        </div>
                                                                    </td>
                                                                    <td className>
                                                                        <div className="row align-items-center w-100">
                                                                            <div className="col-9" />
                                                                            <div className="col-3 d-flex justify-content-end me-auto px-0">
                                                                                <button className="border-0 bg-transparent copyBtn"><img src="assets/img/affiliateDashboard/copy.png" alt /></button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-white txtClass">30%</td>
                                                                    <td className="text-white txtClass">2023-05-06 12:14:59</td>
                                                                    <td className="text-white txtClass">0</td>
                                                                    <td className="text-white txtClass">0</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-12 py-4">
                                                    <div className="row">
                                                        <div className="col d-flex justify-content-center">
                                                            <div className="pagination">
                                                                <button className="bg-transparent border-0"><div className="circle"><img src="assets/img/affiliateDashboard/right-chevron.png" alt /></div></button>
                                                                <button className="bg-transparent border-0"><div className="square">1</div></button>
                                                                <button className="bg-transparent border-0"><div className="circle"><img src="assets/img/affiliateDashboard/right-chevron.png" alt /></div></button>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto d-flex justify-content-end">
                                                            <div className="image">
                                                                <img src="assets/img/affiliateDashboard/userGroup.png" alt />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row btnPadding d-sm-block d-none">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className="bg-transparent border-0 backBtn d-flex justify-content-center align-items-center px-4"><img src="assets/img/affiliateDashboard/back.png" alt />Go back to home page </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-3 mt-4">
                            <div className="refferal open d-sm-none d-block">
                                <div className="row mx-0">
                                    <div className="col d-flex align-items-center">
                                        <div className="refferalImg"><img src="assets/img/affiliateDashboard/referral-code.png" alt /></div>
                                        <span className="txt ms-2">Banners Download</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="down"><img src="assets/img/affiliateDashboard/down-chevron.png" alt /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="outerCard outerPadding">
                                <div className="downloadSection">
                                    <div className="row mx-0 w-100 justify-content-md-between justify-content-center gap-md-0 gap-3">
                                        <div className="col-sm-auto col-12 px-0">
                                            <div className="box d-flex justify-content-between align-items-center">
                                                <div className="folder">
                                                    <img src="assets/img/affiliateDashboard/folder.png" alt />
                                                </div>
                                                <div className="txt">Banners Download</div>
                                                <div className="download">
                                                    <img src="assets/img/affiliateDashboard/download.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto col-12 px-0">
                                            <div className="box d-flex justify-content-between align-items-center">
                                                <div className="folder">
                                                    <img src="assets/img/affiliateDashboard/folder.png" alt />
                                                </div>
                                                <div className="txt">Graphics Download</div>
                                                <div className="download">
                                                    <img src="assets/img/affiliateDashboard/download.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row btnPadding d-sm-block d-none">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className="bg-transparent border-0 backBtn d-flex justify-content-center align-items-center px-4"><img src="assets/img/affiliateDashboard/back.png" alt />Go back to home page </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="refferal open d-sm-none d-block">
                                <div className="row mx-0">
                                    <div className="col d-flex align-items-center">
                                        <div className="refferalImg"><img src="assets/img/affiliateDashboard/referral-code.png" alt /></div>
                                        <span className="txt ms-2">Friends Management</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="down"><img src="assets/img/affiliateDashboard/down-chevron.png" alt /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="outerCard outerPadding">
                                <div className="row gap-3">
                                    <div className="col-12 d-sm-none d-block">
                                        <div className="innerCard">
                                            <div className="number p-4">Friends Number : 0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="outerCard outerPadding">
                                <div className="row gap-3">
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <div className="number p-4">Friends Number : 0</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="innerCard">
                                            <div className="row align-items-center">
                                                <div className="inputBox">
                                                    <div className="row gap-3 gap-xl-0">
                                                        <div className="col-xl-4 col-12">
                                                            <label htmlFor className="lbl">Username</label>
                                                            <input type="text" className="shadow-none inp" name id placeholder="Please Input" />
                                                        </div>
                                                        <div className="col-xl-4 col-12 position-relative">
                                                            <label htmlFor className="lbl">Registration Date</label>
                                                            <input type="text" className="shadow-none inp" name id placeholder="Start Time" />
                                                            <div className="placetxt">&gt;&gt; End Time</div>
                                                        </div>
                                                        <div className="col-xl-4 col-12">
                                                            <label htmlFor className="lbl">Code</label>
                                                            <select className="form-select formSelect" aria-label="Default select example">
                                                                <option selected>All</option>
                                                                <option value={1}>One</option>
                                                                <option value={2}>Two</option>
                                                                <option value={3}>Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 d-flex justify-content-center justify-content-sm-start mt-4 mt-sm-0">
                                                            <button className="serachBtn bg-transparent border-0 px-4 py-1 d-flex align-items-center ">Search <img src="assets/img/affiliateDashboard/serach.png" alt /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <div className="row tableRow">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table className="affiliateDashboardTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Username</th>
                                                                    <th>Total wager($)</th>
                                                                    <th>Total Commissions Rewards($)</th>
                                                                    <th>Registration Date</th>
                                                                    <th>Code</th>
                                                                    <th>Status</th>
                                                                    <th>Tip</th>
                                                                    <th>Chat</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className>
                                                                    </td>
                                                                    <td className>
                                                                    </td>
                                                                    <td className="text-white txtClass" />
                                                                    <td className="text-white txtClass" />
                                                                    <td className="text-white txtClass" />
                                                                    <td className="text-white txtClass" />
                                                                    <td className="text-white txtClass" />
                                                                    <td className="text-white txtClass" />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-12 py-4">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center">
                                                            <div className="oops">
                                                                <img src="assets/img/affiliateDashboard/oops.png" alt />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="oppsTxt">Oops! There is no data yet!</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row btnPadding d-sm-block d-none">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className="bg-transparent border-0 backBtn d-flex justify-content-center align-items-center px-4"><img src="assets/img/affiliateDashboard/back.png" alt />Go back to home page </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-sm-none d-block">
                            <div className="outerCard">
                                <div className="detailBox">
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Username</div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Total wager($)</div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Total Commissions Rewards($) </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Registration Date </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Code </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Status </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Tip </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                    <div className="row detailBg mb-2">
                                        <div className="col-auto">
                                            <div className="main">Chat </div>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className="sub">Oops! There is no data yet!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="refferal open d-sm-none d-block">
                                <div className="row mx-0">
                                    <div className="col d-flex align-items-center">
                                        <div className="refferalImg"><img src="assets/img/affiliateDashboard/commision.png" alt /></div>
                                        <span className="txt ms-2">Commission Rewards</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="down"><img src="assets/img/affiliateDashboard/down-chevron.png" alt /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="outerCard outerPadding">
                                <div className="col-12 d-flex justify-content-end align-items-center py-3 px-3 d-sm-none d-flex">
                                    <a href="#exampleModal2" className="history text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal2"><img src="assets/img/affiliateDashboard/history.png" alt />history</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="outerCard outerPadding">
                                <div className="col-12 d-flex justify-content-end mb-3 d-sm-flex d-none">
                                    <a href="#exampleModal2" className="history text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal2"><img src="assets/img/affiliateDashboard/history.png" alt />history</a>
                                </div>
                                <div className="row gap-3">
                                    <div className="col-12">
                                        <div className="innerCard">
                                            <div className="row py-3 px-3">
                                                <div className="col-12 d-flex justify-content-between align-items-center">
                                                    <div className="mainTxt d-flex align-items-center">Total Commission Rewards Received (Approx) <span>0USD</span></div>
                                                    <a href="#exampleModal2" className="history text-decoration-none d-sm-block d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2"><img src="assets/img/affiliateDashboard/history.png" alt />history</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center gap-lg-0 gap-3 py-3">
                                    <div className="col-12">
                                        <div className="leftBox">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="bgColour d-flex justify-content-between align-items-center">
                                                        <div className="txt">Total Commission Rewards</div>
                                                        {/* <div class="txt">Commission Rewards Available</div> */}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center flex-column">
                                                            <div className="oops mx-auto">
                                                                <img src="assets/img/affiliateDashboard/oops.png" alt />
                                                            </div>
                                                            <div className="oppsTxt">Oops! There is no data yet!</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="leftBox">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="bgColour d-flex justify-content-between align-items-center">
                                                        {/* <div class="txt">Total Commission Rewards</div> */}
                                                        <div className="txt">Commission Rewards Available</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center flex-column">
                                                            <div className="oops mx-auto">
                                                                <img src="assets/img/affiliateDashboard/oops.png" alt />
                                                            </div>
                                                            <div className="oppsTxt">Oops! There is no data yet!</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-12 d-sm-block d-none">
                                        <div className="leftBox">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="bgColour d-flex justify-content-between align-items-center">
                                                        <div className="txt">Total Commission Rewards</div>
                                                        <div className="txt">Commission Rewards Available</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center flex-column">
                                                            <div className="oops mx-auto">
                                                                <img src="assets/img/affiliateDashboard/oops.png" alt />
                                                            </div>
                                                            <div className="oppsTxt">Oops! There is no data yet!</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-12">
                                        <div className="rytBox">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="innerBox position-relative d-flex flex-column justify-content-center">
                                                        <div className="txt">Swap All currencies into</div>
                                                        <select className="form-select shadow-none border-0 selectBox" aria-label="Default select example">
                                                            <option selected>USDT ($1 - $100000)</option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>
                                                        <div className="usidtlogo">
                                                            <img src="assets/img/affiliateDashboard/usdt-logo.png" alt />
                                                        </div>
                                                        <div className="note">Note: Some currencies that do not support swap will remain</div>
                                                        <button className="swapBtn px-4 py-1 mx-auto">SWAP</button>
                                                        <div className="copyRyt">
                                                            All Cryptos One-click Away to Your BC Wallet
                                                        </div>
                                                        <button className="swapBtn px-4 py-1 mx-auto">WITHDRAW</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row btnPadding d-sm-block d-none">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className="bg-transparent border-0 backBtn d-flex justify-content-center align-items-center px-4"><img src="assets/img/affiliateDashboard/back.png" alt />Go back to home page </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="refferal open d-sm-none d-block">
                                <div className="row mx-0">
                                    <div className="col d-flex align-items-center">
                                        <div className="refferalImg"><img src="assets/img/affiliateDashboard/referral-code.png" alt /></div>
                                        <span className="txt ms-2">USD Rewards</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="down"><img src="assets/img/affiliateDashboard/down-chevron.png" alt /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end py-4">
                            <div className="iconBox">
                                <a href="#exampleModal3" className="history text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    <img src="assets/img/affiliateDashboard/history.png" alt />
                                    <span>History</span>
                                </a>
                                <a href="javascript:;" className="history text-decoration-none ms-3">
                                    <img src="assets/img/affiliateDashboard/rules.png" alt />
                                    <span>Rule</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 d-sm-none d-block">
                            <div className="outerCard">
                                <div className="row pt-3 pb-4 availTxtBox">
                                    <div className="col"><div className="availTxt">Newly Available:</div></div>
                                    <div className="col-auto"><div className="availTxt1">0 USD</div></div>
                                </div>
                                <div className="row pt-3 pb-4 availTxtBox">
                                    <div className="col"><div className="availTxt">Newly Available:</div></div>
                                    <div className="col-auto"><div className="availTxt1">0 USD</div></div>
                                </div>
                                <div className="row pt-3 pb-4 availTxtBox">
                                    <div className="col"><div className="availTxt">Newly Available:</div></div>
                                    <div className="col-auto"><div className="availTxt1">0 USD</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 pb-5">
                            <div className="outerCard outerPadding">
                                <div className="row gap-3">
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <div className="row availableBox py-3 px-3">
                                                <div className="col-12 d-flex justify-content-between align-items-center">
                                                    <div className="txt d-flex align-items-center">Newly Available: <span>0 USD</span></div>
                                                    <div className="iconBox">
                                                        <a href="#exampleModal3" className="history text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                                            <img src="assets/img/affiliateDashboard/history.png" alt />
                                                            <span>History</span>
                                                        </a>
                                                        <a href="javascript:;" className="history text-decoration-none ms-3">
                                                            <img src="assets/img/affiliateDashboard/rules.png" alt />
                                                            <span>Rule</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="innerCard">
                                            <div className="row align-items-center">
                                                <div className="inputBox">
                                                    <div className="row gap-3 gap-xxl-0">
                                                        <div className="col-xxl-4 col-xl-12">
                                                            <label htmlFor className="lbl">Username</label>
                                                            <input type="text" className="shadow-none inp" name id placeholder="Please Input" />
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-12 position-relative">
                                                            <label htmlFor className="lbl">Registration Date</label>
                                                            <input type="text" className="shadow-none inp" name id placeholder="Start Time" />
                                                            <div className="mid">&gt;&gt; End Time</div>
                                                            <div className="placetxt placetxt1"><img src="assets/img/affiliateDashboard/calendar.png" alt /></div>
                                                        </div>
                                                        <div className="col-xxl-2 col-xl-12 d-flex justify-content-center mt-sm-0 mt-4 align-items-end">
                                                            <button className="serachBtn bg-transparent border-0 px-4 py-1 d-flex align-items-center">Search <img src="assets/img/affiliateDashboard/serach.png" alt /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-sm-block d-none">
                                        <div className="innerCard">
                                            <div className="row tableRow">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table className="affiliateDashboardTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Username</th>
                                                                    <th>VIP Level</th>
                                                                    <th>Earned Me</th>
                                                                    <th>Code</th>
                                                                    <th>Registration Time</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="text-white txtClass">df</td>
                                                                    <td className="text-white txtClass">dcasdca</td>
                                                                    <td className="text-white txtClass">sdcsd</td>
                                                                    <td className="text-white txtClass">sdcsdc</td>
                                                                    <td className="text-white txtClass">sdcs</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-white txtClass">df</td>
                                                                    <td className="text-white txtClass">dcasdca</td>
                                                                    <td className="text-white txtClass">sdcsd</td>
                                                                    <td className="text-white txtClass">sdcsdc</td>
                                                                    <td className="text-white txtClass">sdcs</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-12 py-4">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center">
                                                            <div className="oops">
                                                                <img src="assets/img/affiliateDashboard/oops.png" alt />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="oppsTxt">Oops! There is no data yet!</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row btnPadding d-sm-block d-none">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button className="bg-transparent border-0 backBtn d-flex justify-content-center align-items-center px-4"><img src="assets/img/affiliateDashboard/back.png" alt />Go back to home page </button>
                                    </div>
                                </div>
                                <div className="col-12 d-sm-none d-block">
                                    <div className="outerCard">
                                        <div className="detailBox">
                                            <div className="row detailBg mb-2">
                                                <div className="col-12">
                                                    <div className="main">Username</div>
                                                </div>
                                            </div>
                                            <div className="row detailBg mb-2">
                                                <div className="col-12">
                                                    <div className="main">VIP Level</div>
                                                </div>
                                            </div>
                                            <div className="row detailBg mb-2">
                                                <div className="col-12">
                                                    <div className="main">Earned Me </div>
                                                </div>
                                            </div>
                                            <div className="row detailBg mb-2">
                                                <div className="col-12">
                                                    <div className="main">Code </div>
                                                </div>
                                            </div>
                                            <div className="row detailBg mb-2">
                                                <div className="col-12">
                                                    <div className="main">Registration Time </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Footer /> */}
                </div>
                    <AppFooter/>
            </main>
        </>

    );
};

export default AffiliateDashboard;
