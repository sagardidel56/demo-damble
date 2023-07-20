import React from "react";

const GlobalSetting = () => {
    return (
        <>
            <main className="main vh-100" id="main">
                <div className="mainContaint afxflitiateDashboard">
                    <div className="container-fluid globalSection pb-5">
                        <div className="row gap-2">
                            <div className="col-12 d-sm-block d-none">
                                <nav className="tabNav">
                                    <div className="nav nav-tabs border-0 gap-1" id="nav-tab" role="tablist">
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">General</button>
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Privacy</button>
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Mail/Phone Number</button>
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Security</button>
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0" id="nav-Sessions-tab" data-bs-toggle="tab" data-bs-target="#nav-Sessions" type="button" role="tab" aria-controls="nav-Sessions" aria-selected="false">Active Sessions</button>
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0" id=" nav-Verify-tab" data-bs-toggle="tab" data-bs-target="#nav-Verify" type="button" role="tab" aria-controls="nav-Verify" aria-selected="false">Verify</button>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 d-sm-block d-none">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane  fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 general">
                                                    <div className="globalContent dflex align-items-center">
                                                        <div className="row mx-0 gap-2">
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my online presence in private chat</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col d-flex align-items-center">
                                                                            <div className="heading d-flex align-items-center">
                                                                                Currency Setting
                                                                            </div>
                                                                            <span className="selectBox"> <select className="form-select w-auto border-0 shadow-none bg-transparent d-flex align-items-center justify-content-end me-0" aria-label="Default select example">
                                                                                <option selected className="bg-transparent">USD</option>
                                                                                <option value={1}>One</option>
                                                                                <option value={2}>Two</option>
                                                                                <option value={3}>Three</option>
                                                                            </select>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Display mode</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <div className="d-flex align-items-center gap-2">
                                                                                <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center lightBtn"> <span className="btnImg d-inline-flex me-2"><img src="assets/img/global/night-mode.png" alt="nightmode" className="img-fluid h-100 w-100" /></span> Dark</a>
                                                                                <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center lightBtn"> <span className="btnImg d-inline-flex me-2"><img src="assets/img/global/brightness.png" alt="lightMode" className="img-fluid h-100 w-100" /></span> Light</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading d-flex align-items-center">
                                                                                Language
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <span className="selectBox selectbox2"> <select className="form-select w-auto border-0 shadow-none bg-transparent d-flex align-items-center justify-content-end me-0" aria-label="Default select example">
                                                                                <option selected className="bg-transparent px-3">English</option>
                                                                                <option value={1}>One</option>
                                                                                <option value={2}>Two</option>
                                                                                <option value={3}>Three</option>
                                                                            </select>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 privacy">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-2">
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my online presence in private chat</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pera pt-2 ps-1">
                                                                    Even if hidden, your avatar and username are always visible in chatrooms.
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my username from public lists</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pera pt-2 ps-1">
                                                                    If hidden, no one can view your profile by clicking on your avatar or username on <br /> public rankings or bets list.
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my online presence in private chat</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Allow private messages from strangers</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Refuse any new friend request</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Refuse tip from strangers</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 signIn">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-lg-0 gap-4">
                                                            <div className="col-lg-5 px-0">
                                                                <div className="signInHeading pb-2">   Mail/Phone Number</div>
                                                                <div className="globalContentInner">
                                                                    <div className=" row mx-0 signInContent">
                                                                        <div className="col-12 px-0">
                                                                            <div>
                                                                                <label htmlFor="exampleFormControlInput1 labelForm" className="form-label">Set login email</label>
                                                                                <input type="email" className="form-control border-0 shadow-none " id="exampleFormControlInput1" placeholder />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto mx-auto pt-4">
                                                                            <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Confirm</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 px-0 ms-auto">
                                                                <div className="signInHeading pb-2"> Phone Number</div>
                                                                <div className="globalContentInner">
                                                                    <div className=" row mx-0 signInContent  signInContent2">
                                                                        <div className="col-12 px-0">
                                                                            <div className="pb-2">
                                                                                <label htmlFor="exampleFormControlInput1 labelForm" className="form-label">Add Phone Number as your second login method.</label>
                                                                            </div>
                                                                            <div className="input-group  px-4">
                                                                                <span className="input-group-text rounded-start-2 border-0  rounded-0 shadow-none bg-transparent" id="basic-addon1"> +971</span>
                                                                                <input type="text" className="form-control rounded-0 ms-0 ps-0 border-0 shadow-none rounded-end-2" placeholder="| Enter your phone number" aria-label="Username" aria-describedby="basic-addon1" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto mx-auto pt-4">
                                                                            <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Confirm</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 security">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-5">
                                                            <div className="col-12 px-0">
                                                                <div className="row mx-0">
                                                                    <div className="col-12 text-center">
                                                                        <div className="signInHeading">Set login password</div>
                                                                        <div className="input-group pt-3">
                                                                            <input type="password" className="form-control border-0 shadow-none rounded-0 rounded-start-2" placeholder aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                            <span className="input-group-text border-0 shadow-none ms-0" id="basic-addon2"> <img src="assets/img/global/eye.png" alt="eye" className="img-fluid w-100 h-100" /></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0 text-center pt-4">
                                                                <div className="text-center signInHeading pb-3">Two-factor Authentication</div>
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 gap-3 text-center">
                                                                        <div className="col-12 px-0">
                                                                            <div className="peragraph">Download and install Google Authenticator. Enable Two-factor
                                                                                Authentication to protect your account from unauthorized access.
                                                                                Scan the QR code with your Google Authenticator
                                                                                App or enter the secret key manually.</div>
                                                                        </div>
                                                                        <div className="col-12 px-0 pt-3">
                                                                            <div className="qrImg m-auto"><img src="assets/img/global/qr-code.png" alt="qrcode" className="img-fluid w-100 h-100" /></div>
                                                                        </div>
                                                                        <div className="col-12 px-0 text-start">
                                                                            <label htmlFor="exampleFormControlInput1" className="form-label peragraph">Email address</label>
                                                                            <input type="email" className="form-control border-0 shadow-none" id="exampleFormControlInput1" />
                                                                        </div>
                                                                        <div className="col-12 px-0">
                                                                            <div className="peragraph">
                                                                                Write down this code, never reveal it to others.
                                                                                You can use it to regain access to your account
                                                                                if there is no access to the authenticator.
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 pt-3">
                                                                            <label htmlFor="exampleFormControlInput1" className="form-label peragraph">Verification code</label>
                                                                            <div className="otp-input-fields">
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none" />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto mx-auto pt-4">
                                                                            <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Enable</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-Sessions" role="tabpanel" aria-labelledby="nav-Sessions-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 activeSessions">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-5">
                                                            <div className="col-12 px-0 d-md-block d-none">
                                                                <div className="signInHeading">Sessions Used in Past</div>
                                                            </div>
                                                            <div className="col-12 px-0 table-responsive sessionTable">
                                                                <table className="table text-nowrap align-middle d-md-block d-none">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Browser</th>
                                                                            <th>Location</th>
                                                                            <th>IP Address</th>
                                                                            <th>Handle</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Windows 10 (Chrome 11)</td>
                                                                            <td>USA</td>
                                                                            <td>5.30.202.207</td>
                                                                            <td>Online</td>
                                                                            <td>In Use</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-Verify" role="tabpanel" aria-labelledby="nav-Verify-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 Verify">
                                                    <div className="globalContent">
                                                        <div className="row mx-0">
                                                            <div className="col-lg-7 px-0">
                                                                <div className="signInHeading">Sessions Used in Past</div>
                                                                <div className="peragraph pera2 text-start pt-4">
                                                                    To serve you better we ask that you provide original identifying documents. This will secure your account in cases of account recovery. It also helps to ensure that the gifts or actual rewards you receive are sent to the correct location.
                                                                </div>
                                                                <div className="peragraph pera2 text-start pt-3"> An acceptable proof of identification includes a photo of your government issued ID card, driver's license and passport.</div>
                                                                <div className="peragraph pera2 text-start pt-3"> We will reach out to you via email once this process has been completed..</div>
                                                            </div>
                                                            <div className="col-lg-5 px-0">
                                                                <div className="row mx-0">
                                                                    <div className="col-12 px-0 ">
                                                                        <div className="row mx-0">
                                                                            <div className="col-6 px-lg-1 px-0">
                                                                                <div className="row mx-0 gap-2">
                                                                                    <div className="col-12 px-0 text-start">
                                                                                        <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">First Name</label>
                                                                                        <input type="text" className="form-control border-0 shadow-none" id="exampleFormControlInput2" />
                                                                                    </div>
                                                                                    <div className="col-12 px-0">
                                                                                        <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Gender</label>
                                                                                        <span className="selectSection">
                                                                                            <select className="form-select border-0 shadow-none selectboxSection bg-transparent" aria-label="Default select example">
                                                                                                <option selected />
                                                                                                <option value={1}>Male</option>
                                                                                                <option value={2}>Female</option>
                                                                                                <option value={3}>Other</option>
                                                                                            </select>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 px-lg-1 px-0">
                                                                                <div className="row mx-0 gap-2">
                                                                                    <div className="col-12 px-0 text-start">
                                                                                        <label htmlFor="exampleFormControlInput3" className="form-label label2 peragraph">Last Name</label>
                                                                                        <input type="text" className="form-control border-0 shadow-none" id="exampleFormControlInput3" />
                                                                                    </div>
                                                                                    <div className="col-12 px-0 text-start position-relative dateSection">
                                                                                        <label htmlFor="exampleFormControlInput3" className="form-label label2 peragraph">Date of Birth</label>
                                                                                        <input type="text" className="form-control border-0 shadow-none " id="exampleFormControlInput3" placeholder="00/00/0000" />
                                                                                        <div className="dateImg"><img src="assets/img/global/date.png" alt="date" className="img-fluid w-100 h-100" /></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 px-0 ">
                                                                        <div className="col-12 px-lg-1 px-0 text-start">
                                                                            <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Address</label>
                                                                            <input type="text" className="form-control border-0 shadow-none" id="exampleFormControlInput2" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 px-0 ">
                                                                        <div className="row mx-0">
                                                                            <div className="col-6 px-lg-1 px-0">
                                                                                <div className="row mx-0 gap-2">
                                                                                    <div className="col-12 px-0 text-start">
                                                                                        <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">ZIP/Postal Code</label>
                                                                                        <input type="text" className="form-control border-0 shadow-none" id="exampleFormControlInput2" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6 px-lg-1 px-0">
                                                                                <div className="row mx-0 gap-2">
                                                                                    <div className="col-12 px-0 text-start">
                                                                                        <label htmlFor="exampleFormControlInput3" className="form-label label2 peragraph">City</label>
                                                                                        <input type="text" className="form-control border-0 shadow-none" id="exampleFormControlInput3" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 px-0">
                                                                        <div className="row mx-0">
                                                                            <div className="col-12 px-lg-1 px-0">
                                                                                <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Country</label>
                                                                                <span className="selectSection">
                                                                                    <select className="form-select border-0 shadow-none selectboxSection bg-transparent" aria-label="Default select example">
                                                                                        <option selected>USA</option>
                                                                                        <option value={1}>Male</option>
                                                                                        <option value={2}>Female</option>
                                                                                        <option value={3}>Other</option>
                                                                                    </select>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-auto px-0 mx-auto mt-5">
                                                                        <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Enable</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <nav className="tabNav show">
                                    <div className="nav nav-tabs border-0 gap-1 position-relative" id="nav-tab" role="tablist">
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">General</button>
                                        <div className="downBtn"><img src="assets/./img/global/right-chevron.png" alt="downBTn" className="img-fluid w-100 h-100" /></div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane  fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 general">
                                                    <div className="globalContent dflex align-items-center">
                                                        <div className="row mx-0 gap-2">
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my online presence in private chat</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col d-flex align-items-center">
                                                                            <div className="heading d-flex align-items-center">
                                                                                Currency Setting
                                                                            </div>
                                                                            <span className="selectBox"> <select className="form-select w-auto border-0 shadow-none bg-transparent d-flex align-items-center justify-content-end me-0" aria-label="Default select example">
                                                                                <option selected className="bg-transparent">USD</option>
                                                                                <option value={1}>One</option>
                                                                                <option value={2}>Two</option>
                                                                                <option value={3}>Three</option>
                                                                            </select>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Display mode</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <div className="d-flex align-items-center gap-2">
                                                                                <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center lightBtn"> <span className="btnImg d-inline-flex me-2"><img src="assets/img/global/night-mode.png" alt="nightmode" className="img-fluid h-100 w-100" /></span> Dark</a>
                                                                                <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center lightBtn"> <span className="btnImg d-inline-flex me-2"><img src="assets/img/global/brightness.png" alt="lightMode" className="img-fluid h-100 w-100" /></span> Light</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading d-flex align-items-center">
                                                                                Language
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <span className="selectBox selectbox2"> <select className="form-select w-auto border-0 shadow-none bg-transparent d-flex align-items-center justify-content-end me-0" aria-label="Default select example">
                                                                                <option selected className="bg-transparent px-3">English</option>
                                                                                <option value={1}>One</option>
                                                                                <option value={2}>Two</option>
                                                                                <option value={3}>Three</option>
                                                                            </select>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <nav className="tabNav show">
                                    <div className="nav nav-tabs border-0 gap-1 position-relative" id="nav-tab" role="tablist">
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0 active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Privacy</button>
                                        <div className="downBtn"><img src="assets/./img/global/right-chevron.png" alt="downBTn" className="img-fluid w-100 h-100" /></div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 privacy">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-2">
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my online presence in private chat -------</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pera pt-2 ps-1">
                                                                    Even if hidden, your avatar and username are always visible in chatrooms.
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my username from public lists</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pera pt-2 ps-1">
                                                                    If hidden, no one can view your profile by clicking on your avatar or username on <br /> public rankings or bets list.
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Hide my online presence in private chat</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Allow private messages from strangers</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Refuse any new friend request</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 align-items-center h-100">
                                                                        <div className="col">
                                                                            <div className="heading">Refuse tip from strangers</div>
                                                                        </div>
                                                                        <div className="col-auto d-flex align-items-center ">
                                                                            <label className="switch">
                                                                                <input type="checkbox" defaultChecked />
                                                                                <span className="slider round" />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <nav className="tabNav show">
                                    <div className="nav nav-tabs border-0 gap-1 position-relative" id="nav-tab" role="tablist">
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0 active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Mail/Phone Number</button>
                                        <div className="downBtn"><img src="assets/./img/global/right-chevron.png" alt="downBTn" className="img-fluid w-100 h-100" /></div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 signIn">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-lg-0 gap-4">
                                                            <div className="col-lg-5 px-0">
                                                                <div className="signInHeading pb-2">   Mail/Phone Number</div>
                                                                <div className="globalContentInner">
                                                                    <div className=" row mx-0 signInContent">
                                                                        <div className="col-12 px-0">
                                                                            <div>
                                                                                <label htmlFor="exampleFormControlInput1 labelForm" className="form-label">Set login email</label>
                                                                                <input type="email" className="form-control border-0 shadow-none " id="exampleFormControlInput1" placeholder />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto mx-auto pt-4">
                                                                            <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Confirm</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 px-0 ms-auto">
                                                                <div className="signInHeading pb-2"> Phone Number</div>
                                                                <div className="globalContentInner">
                                                                    <div className=" row mx-0 signInContent  signInContent2">
                                                                        <div className="col-12 px-0">
                                                                            <div className="pb-2">
                                                                                <label htmlFor="exampleFormControlInput1 labelForm text-sm-start text-center" className="form-label">Add Phone Number as your second login method.</label>
                                                                            </div>
                                                                            <div className="input-group  px-4">
                                                                                <span className="input-group-text rounded-start-2 border-0  rounded-0 shadow-none bg-transparent" id="basic-addon1"> +971</span>
                                                                                <input type="text" className="form-control rounded-0 ms-0 ps-0 border-0 shadow-none rounded-end-2" placeholder="| Enter your phone number" aria-label="Username" aria-describedby="basic-addon1" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto mx-auto pt-4">
                                                                            <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Confirm</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <nav className="tabNav show">
                                    <div className="nav nav-tabs border-0 gap-1 position-relative" id="nav-tab" role="tablist">
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0 active" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Security</button>
                                        <div className="downBtn"><img src="assets/./img/global/right-chevron.png" alt="downBTn" className="img-fluid w-100 h-100" /></div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 security">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-5">
                                                            <div className="col-12 px-0">
                                                                <div className="row mx-0">
                                                                    <div className="col-12 text-center">
                                                                        <div className="signInHeading signInHeading2">Set login password</div>
                                                                        <div className="input-group pt-3">
                                                                            <input type="password" className="form-control border-0 shadow-none rounded-0 rounded-start-2" placeholder aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                                            <span className="input-group-text border-0 shadow-none ms-0" id="basic-addon2"> <img src="assets/img/global/eye.png" alt="eye" className="img-fluid w-100 h-100" /></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 px-0 text-center ">
                                                                <div className="text-center signInHeading signInHeading2 pb-3">Two-factor Authentication</div>
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0 gap-3 text-center">
                                                                        <div className="col-12 px-0">
                                                                            <div className="peragraph">Download and install Google Authenticator. Enable Two-factor
                                                                                Authentication to protect your account from unauthorized access.
                                                                                Scan the QR code with your Google Authenticator
                                                                                App or enter the secret key manually.</div>
                                                                        </div>
                                                                        <div className="col-12 px-0 pt-4">
                                                                            <div className="qrImg m-auto"><img src="assets/img/global/qr-code.png" alt="qrcode" className="img-fluid w-100 h-100" /></div>
                                                                        </div>
                                                                        <div className="col-12 px-0 text-start">
                                                                            <label htmlFor="exampleFormControlInput1" className="form-label peragraph">Email address</label>
                                                                            <input type="email" className="form-control border-0 shadow-none" id="exampleFormControlInput1" />
                                                                        </div>
                                                                        <div className="col-12 px-0">
                                                                            <div className="peragraph">
                                                                                Write down this code, never reveal it to others.
                                                                                You can use it to regain access to your account
                                                                                if there is no access to the authenticator.
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 pt-3">
                                                                            <label htmlFor="exampleFormControlInput1" className="form-label peragraph">Verification code</label>
                                                                            <div className="otp-input-fields pt-2">
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none" />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                                <input type="text" defaultValue={0} className="border-0 shadow-none " />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-auto mx-auto pt-4">
                                                                            <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center confirmBtn">Enable</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-sm-none d-block">
                                <nav className="tabNav show">
                                    <div className="nav nav-tabs border-0 gap-1 position-relative" id="nav-tab" role="tablist">
                                        <button className="nav-link navBtn border-0 shadow-none rounded-0 active" id="nav-Sessions-tab" data-bs-toggle="tab" data-bs-target="#nav-Sessions" type="button" role="tab" aria-controls="nav-Sessions" aria-selected="false">Active Sessions</button>
                                        <div className="downBtn"><img src="assets/./img/global/right-chevron.png" alt="downBTn" className="img-fluid w-100 h-100" /></div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-12 d-md-none d-block">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-Sessions" role="tabpanel" aria-labelledby="nav-Sessions-tab" tabIndex={0}>
                                        <div className="outterCard">
                                            <div className="row mx-0">
                                                <div className="col-12 px-0 activeSessions">
                                                    <div className="globalContent">
                                                        <div className="row mx-0 gap-md-5 gap-3">
                                                            <div className="col-12 px-0">
                                                                <div className="signInHeading">Sessions Used in Past</div>
                                                            </div>
                                                            <div className="col-12 px-0 sessionTable">
                                                                <div className="globalContentInner">
                                                                    <div className="row mx-0">
                                                                        <div className="col-12 px-0">
                                                                            <div className="row mx-0 gap-2">
                                                                                <div className="col-12 px-0 text-start">
                                                                                    <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Address</label>
                                                                                    <input type="text" className="form-control inputBg border-0 shadow-none" id="exampleFormControlInput2" placeholder="Mobile: Iphone ( 14 pro max )" />
                                                                                </div>
                                                                                <div className="col-12 px-0 text-start">
                                                                                    <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Location</label>
                                                                                    <input type="text" className="form-control inputBg border-0 shadow-none" id="exampleFormControlInput2" placeholder="USA" />
                                                                                </div>
                                                                                <div className="col-12 px-0 text-start">
                                                                                    <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">IP Address</label>
                                                                                    <input type="text" className="form-control inputBg border-0 shadow-none" id="exampleFormControlInput2" placeholder="5.30.202.207" />
                                                                                </div>
                                                                                <div className="col-12 px-0 text-start">
                                                                                    <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Last Used</label>
                                                                                    <input type="text" className="form-control inputBg border-0 shadow-none" id="exampleFormControlInput2" defaultValue="Online" style={{ color: '#03B80F', fontSize: 9 }} />
                                                                                </div>
                                                                                <div className="col-12 px-0 text-start">
                                                                                    <label htmlFor="exampleFormControlInput2" className="form-label label2 peragraph">Action</label>
                                                                                    <input type="text" className="form-control inputBg border-0 shadow-none" id="exampleFormControlInput2" placeholder="In Use" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default GlobalSetting;
