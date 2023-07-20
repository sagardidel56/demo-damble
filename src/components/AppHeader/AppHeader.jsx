import React from "react";
import { ROUTES_CONST } from "../../constants/routeConstant";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";
import { useSignInModal } from "../../hooks/useSignInModal";

const AppHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname, ROUTES_CONST.SPORTS)
    const { isSignInOpen, setIsSignInOpen } = useSignInModal()

    return (
        <>
            <header className="navbar p-0 position-fixed top-0 w-100">
                <div className=" headerFluid w-100 d-lg-block d-none">
                    <div className="row headerRow">
                        <div className="col-auto px-0 d-xl-block d-none">
                            <div className="logoWrapper" onClick={() => navigate(ROUTES_CONST.CASINO)} style={{ cursor: "pointer" }}>
                                <div className="logo">
                                    <img className="image" src="assets/img/dambleLogo.png" alt />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl col-12 px-0">
                            <div className="row headerRyt mx-0">
                                <div className="col d-flex align-items-center">
                                    <ul className="pills d-flex align-items-start mb-0 ps-0">
                                        <li className="casinoPill">
                                            <Link
                                                to={ROUTES_CONST.CASINO}
                                                className={`pillAnchor d-flex align-items-center justify-content-center ${location.pathname !== ROUTES_CONST.SPORTS ? 'active' : ''}`}
                                            //   data-bs-toggle="modal"
                                            //    data-bs-target="#exampleModal"
                                            >
                                                <img src="assets/img/casinoIcon.png" alt />CASINO</Link></li>
                                        <li className="casinoPill"
                                        // onClick={() => navigate(ROUTES_CONST.SPORTS)}
                                        >
                                            <Link
                                                //  href="exampleModal1"
                                                to={ROUTES_CONST.SPORTS}
                                                className={`pillAnchor d-flex justify-content-center  align-items-center ${location.pathname === ROUTES_CONST.SPORTS ? "active" : ""}`}
                                            // data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                            >
                                                <img src="assets/img/sportsIcon.png" alt />SPORTS </Link></li>

                                    </ul>
                                    <div className="group position-relative">
                                        <input type="text" className="searchInp" name id placeholder="Search for games" />
                                        <div className="searchIcon">
                                            <img src="assets/img/search.png" alt className="w-100" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-auto d-flex align-items-center">
                                    <a href="javascript:;" className="msgIcon"><img src="./assets/img/message.png" alt="" /></a>
                                    <span className="usdTxt text-white">$usd</span>
                                    <a href="javascript:;" className="globeIcon"><img src="./assets/img/globe.png" alt="" /></a>
                                </div> */}
                                <div className="col-auto d-flex align-items-center headerFluidlg py-0">
                                    <button
                                        className="logBtn"
                                        onClick={() => setIsSignInOpen(true)}
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#exampleModal"
                                    >Log in</button>
                                    <button className="signBtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid headerFluidlg  d-block d-lg-none">
                    <div className="row align-items-center">
                        <div className="col-6 d-flex justify-content-start align-items-center">
                            <div className="gd"><img src="assets/img/gd.png" alt /></div>
                            <div className="gdTxt"><img src="assets/img/logotxt.png" alt /></div>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-end">
                            <button
                                className="logBtn"
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal"
                            >Log in</button>
                            <button className="signBtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">Sign up</button>
                        </div>
                        {/* <div className="col-6 d-flex align-items-center justify-content-end headerRyt ">
                            <a href="javascript:;" className="msgIcon mx-1"><img src="./assets/img/message.png" alt="" /></a>
                            <span className="usdTxt text-white mx-1">$usd</span>
                            <a href="javascript:;" className="globeIcon mx-1"><img src="./assets/img/globe.png" alt="" /></a>
                        </div> */}
                    </div>
                </div>
            </header>
            <SignUp />
            <SignIn />
        </>
    );
};

export default AppHeader;
