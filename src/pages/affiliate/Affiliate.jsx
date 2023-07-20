import React from "react";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppSideBar from "../../components/AppSideBar/AppSideBar";

const Affiliate = () => {
    return (
        <>
            <AppSideBar />
            <main className="main vh-100" id="main">
                <div className="mainContaint affiliatePage">
                    {/* ****** [affiliate Hero Section Start ] ****** */}
                    <div className="container-fluid h-100 rewardSection">
                        <div className="row h-100 gap-lg-0 gap-3">
                            <div className="col-lg-8 h-100">
                                <div className="rewardOuter h-100">
                                    <div className="row mx-0">
                                        <div className="col-12 px-0 rewardcard">
                                            <div className="innermain ">
                                                <div className="row mx-0">
                                                    <div className="col-md-6 px-0">
                                                        <div className="row mx-0">
                                                            <div className="col-auto px-0">
                                                                <div className="rewardImg"><img src="assets/img/affiliate/rewardImg1.png" alt="rewardImg" className="img-fluid w-100 h-100" /></div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="rewardHeading">TOTAL REWARD EARNED:</div>
                                                                <div className="rewardsubheading">0.00$</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 d-md-block d-none px-0">
                                                        <div className="row mx-0">
                                                            <div className="col-auto px-0">
                                                                <div className="rewardImg hrLine"><img src="assets/img/affiliate/rewardImg2.png" alt="rewardImg" className="img-fluid w-100 h-100" /></div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="rewardHeading">TOTAL FRIENDS REFERRED:</div>
                                                                <div className="rewardHeading">0</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-0 withdrawCard">
                                            <div className="innermain ">
                                                <div className="row mx-0">
                                                    <div className="col-12 px-0">
                                                        <div className="row mx-0">
                                                            <div className="col-12 px-0">
                                                                <div className="row mx-0 align-items-center">
                                                                    <div className="col px-0">
                                                                        <div className="withdrawheading text-center d-flex align-items-center "> <span className="d-md-none d-block d-inline-flex me-2"><img src="assets/img/affiliate/reward.png" alt="reward" className="img-fluid w-100 h-100" /></span> REFERRAL REWARDS</div>
                                                                    </div>
                                                                    <div className="col-auto px-0 text-end">
                                                                        <a href="javascript:;" className="text-decoration-none detailsbtn">Details &gt;&gt;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0 pt-md-0 pt-4">
                                                        <div className="withdrawHeadimg text-center">0.00$</div>
                                                    </div>
                                                    <div className="col-auto mx-auto pt-3">
                                                        <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center withdrawBtn">Withdraw</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 px-0 rewardcard d-md-none d-block">
                                            <div className="innermain ">
                                                <div className="row mx-0">
                                                    <div className="col-12  px-0">
                                                        <div className="row mx-0">
                                                            <div className="col-auto px-0">
                                                                <div className="rewardImg hrLine"><img src="assets/img/affiliate/rewardImg2.png" alt="rewardImg" className="img-fluid w-100 h-100" /></div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="rewardHeading">TOTAL FRIENDS REFERRED:</div>
                                                                <div className="rewardHeading">0</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-0 withdrawCard">
                                            <div className="innermain innermain2">
                                                <div className="row mx-0">
                                                    <div className="col-12 px-0">
                                                        <div className="row mx-0">
                                                            <div className="col-12 px-0">
                                                                <div className="row mx-0 align-items-center">
                                                                    <div className="col px-0">
                                                                        <div className="withdrawheading text-center d-flex align-items-center justify-content-md-center justify-content-start"><span className="d-inline-flex me-md-2 me-3"><img src="assets/img/affiliate/hand.png" alt /></span> COMMISSION REWARDS</div>
                                                                    </div>
                                                                    <div className="col-auto px-0 text-end">
                                                                        <a href="javascript:;" className="text-decoration-none detailsbtn">Details &gt;&gt;</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="withdrawHeadimg text-center">0.00$</div>
                                                    </div>
                                                    <div className="col-auto mx-auto pt-3">
                                                        <a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-center withdrawBtn">Withdraw</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 px-0 oppesCard">
                                            <div className="innermain ">
                                                <div className="row mx-0">
                                                    <div className="col-12 px-0">
                                                        <div className="oppesHeading  text-center">REWARDS ACTIVITIES</div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="oppesImg mx-auto"><img src="assets/img/affiliate/oops.png" alt="oppes" className="img-fluid w-100 h-100" /></div>
                                                        <div className="oppesText text-center pt-2">No info yet Invite friends to join you now!</div>
                                                    </div>
                                                    <div className="col-auto mx-auto d-md-none d-block">
                                                        <a href="javaScript:;" className="text-decoration-none d-flex align-items-center justify-content-center deshboradBtn">Go to Dashboard</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto mx-auto pb-4 d-md-block d-none">
                                            <a href="javaScript:;" className="text-decoration-none d-flex align-items-center justify-content-center deshboradBtn">Go to Dashboard</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-md-block d-none h-100">
                                <div className="rewardOuter h-100">
                                    <div className="row mx-0">
                                        <div className="col-12 px-0 inviteCard ">
                                            <div className="innermain">
                                                <div className="heading">INVITE A FRIEND TO GET:</div>
                                                <div className="subheading pt-5"><span> 1000$ </span>REFERRAL REWARDS</div>
                                                <div className="subheading pt-2"><span>UP TO 50%</span>COMMISSION REWARDS</div>
                                            </div>
                                        </div>
                                        <div className="col-12 px-0 referlink">
                                            <div className="innermain">
                                                <div className="row mx-0 ">
                                                    <div className="col-12 pb-2 px-0">
                                                        <label htmlFor="basic-url" className="form-label">Referral Code</label>
                                                        <div className="input-group mt-1">
                                                            <input type="text" className="form-control bg-transparent border-0 shadow-none formInput" defaultValue="EXAMPLE" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                            <span className="input-group-text border-0 shadow-none bg-transparent" id="basic-addon2"><a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-between referLinkBtn" type="button"><img src="assets/img/affiliate/copy.png" alt="referlink" className="img-fluid w-100 h-100" /></a></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 px-0 pt-lg-5 pt-3">
                                                        <label htmlFor="basic-url" className="form-label">Referral Link</label>
                                                        <div className="input-group mt-1">
                                                            <input type="text" className="form-control bg-transparent border-0 shadow-none formInput" defaultValue="https://DAMBLE/example/" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                            <span className="input-group-text border-0 shadow-none bg-transparent" id="basic-addon2"><a href="javascript:;" className="text-decoration-none d-flex align-items-center justify-content-between referLinkBtn" type="button"><img src="assets/img/affiliate/copy.png" alt="referlink" className="img-fluid w-100 h-100" /></a></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 d-flex px-0 pt-3">
                                                        <div className="row mx-0">
                                                            <div className="col-6 ps-0 pe-1">
                                                                <a href="javascript:;" className="w-100 text-decoration-none d-flex align-items-center justify-content-center createBtn">Create another code</a>
                                                            </div>
                                                            <div className="col-6 ps-1 pe-0">
                                                                <a href="javascript:;" className="w-100 text-decoration-none d-flex align-items-center justify-content-center createBtn shereBtn">Create another code</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="pera text-end">Referral Terms &amp; Conditions &gt;</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ****** [affiliate Hero Section End ] ****** */}
                    {/* ****** [affiliate live Rewards Section Start ] ****** */}
                    <div className="container-fluid py-lg-5 py-md-4 py-2 liveRewardSection">
                        <div className="row gap-3">
                            <div className="col-12">
                                <div className="sectionHeading d-flex align-items-center">
                                    Live Rewards
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rewardOuter">
                                    <div className="row mx-0">
                                        <div className="col-12 px-0 liveRewardCard">
                                            <div className="innermain">
                                                <div className="row mx-0">
                                                    <div className="col-md-6 px-sm-2 px-0 ">
                                                        <div className="liveRewardContent">
                                                            <div className="row mx-0 align-items-center gap-lg-0 gap-2">
                                                                <div className="col-lg-auto px-0 me-3 ">
                                                                    <div className="liverewardImg mx-lg-0 mx-auto d-md-block d-none"><img src="assets/img/affiliate/VectorSmartObject.png" alt="livereward" className="img-fluid w-100 h-100" /></div>
                                                                </div>
                                                                <div className="col-lg px-0">
                                                                    <div className="heading text-center pb-2 d-flex align-items-center justify-content-center "><span className="liverewardImg d-md-none d-block me-2"><img src="assets/img/affiliate/VectorSmartObject.png" alt="livereward" className="img-fluid w-100 h-100" /></span> Total Rewards Sent To-Date</div>
                                                                    <div className="reward text-center mx-sm-auto mx-4 mb-sm-0 mb-3 ">36.156.945.34$</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 px-0">
                                                        <div className="row mx-0 align-items-center">
                                                            <div className="col-12">
                                                                <div className="userNameReward mt-1">
                                                                    <div className="row mx-0 gap-lg-0 gap-2">
                                                                        <div className="col-lg-6 px-lg-0">
                                                                            <div className="userRewardHeading d-flex align-items-center">
                                                                                <div className="row mx-0">
                                                                                    <div className="col-12 px-0">
                                                                                        <div className="row mx-0 gy-2">
                                                                                            <div className="col-12 px-0">
                                                                                                <div className="row userSection align-items-center">
                                                                                                    <div className="col-auto px-0">
                                                                                                        <span className="userImg me-1 d-flex align-items-center"><img src="assets/img/affiliate/user.png" alt="user" className="img-fluid w-100 h-100" /></span>
                                                                                                    </div>
                                                                                                    <div className="col px-0">
                                                                                                        <div>
                                                                                                            username <span className="subheading ms-1"> Got </span> <span className="rewardRecive mx-1"> 19.25$ </span>  <span className="subheading "> rewards</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-12 px-0">
                                                                                                <div className="row userSection align-items-center">
                                                                                                    <div className="col-auto px-0">
                                                                                                        <span className="userImg me-1 d-flex align-items-center"><img src="assets/img/affiliate/user.png" alt="user" className="img-fluid w-100 h-100" /></span>
                                                                                                    </div>
                                                                                                    <div className="col px-0">
                                                                                                        <div>
                                                                                                            username <span className="subheading ms-1"> Got </span> <span className="rewardRecive mx-1"> 19.25$ </span>  <span className="subheading "> rewards</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 ">
                                                                            <div className="userRewardHeading d-flex align-items-center">
                                                                                <div className="row mx-0">
                                                                                    <div className="col-12 px-0">
                                                                                        <div className="row mx-0 gy-2">
                                                                                            <div className="col-12 px-0">
                                                                                                <div className="row userSection align-items-center">
                                                                                                    <div className="col-auto px-0">
                                                                                                        <span className="userImg me-1 d-flex align-items-center"><img src="assets/img/affiliate/user.png" alt="user" className="img-fluid w-100 h-100" /></span>
                                                                                                    </div>
                                                                                                    <div className="col px-0">
                                                                                                        <div>
                                                                                                            username <span className="subheading ms-1"> Got </span> <span className="rewardRecive mx-1"> 19.25$ </span>  <span className="subheading "> rewards</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-12 px-0">
                                                                                                <div className="row userSection align-items-center">
                                                                                                    <div className="col-auto px-0">
                                                                                                        <span className="userImg me-1 d-flex align-items-center"><img src="assets/img/affiliate/user.png" alt="user" className="img-fluid w-100 h-100" /></span>
                                                                                                    </div>
                                                                                                    <div className="col px-0">
                                                                                                        <div>
                                                                                                            username <span className="subheading ms-1"> Got </span> <span className="rewardRecive mx-1"> 19.25$ </span>  <span className="subheading "> rewards</span>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ****** [affiliate live Rewards Section end ] ****** */}
                    {/* ****** [affiliate program Section Start ] ****** */}
                    <div className="container-fluid affiliateProgramSection">
                        <div className="row">
                            <div className="col-12">
                                <div className="rewardOuter">
                                    <div className="row mx-0">
                                        <div className="col-12 px-0">
                                            <div className="innermain">
                                                <div className="row mx-0 align-items-center gap-lg-0 gap-4">
                                                    <div className="col-lg-3 px-0 order-sm-1 order-2">
                                                        <div className="progressImg mx-lg-0 mx-auto">
                                                            <img src="assets/img/affiliate/progress.png" alt="progress" className="img-fluid w-100 h-100" />
                                                        </div>
                                                        <div className="col-12 progressContent pt-5 d-sm-none d-block px-0 ">
                                                            <div className="row mx-0">
                                                                <div className="col-auto px-0">
                                                                    <div className="pera">for more details, please </div>
                                                                </div>
                                                                <div className="col px-0 text-end">
                                                                    <div className="pera"><span className="ms-2"> <a href="javascript:;" className="text-decoration-none  contactUsBtn"> Contact Us &gt;&gt;</a></span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-9 text-md-start text-center order-sm-2 order-1">
                                                        <div className="row mx-0 progressContent gap-3 align-items-center">
                                                            <div className="col-12 px-0 heading">LEARN MORE ABOUT OUR <br className="d-sm-none d-block" /> <span> AFFILIATE PROGRAM </span></div>
                                                            <div className="col-12 pera px-0"> - If you have a large audience and followers. We have special conditions for you to customize your
                                                                referral program! </div>
                                                            <div className="col-12 pera px-0">
                                                                - If you can invite players and their wager amount reaches half a billion dollars and above, you will get
                                                                your own customized casino! You                           can set up a casino website with your own domain and design style.
                                                            </div>
                                                            <div className="col-12 pera pt-3 px-0 d-sm-block d-none">
                                                                for more details, please <span className="ms-2"> <a href="javascript:;" className="text-decoration-none  contactUsBtn"> Contact Us &gt;&gt;</a></span>
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
                    {/* ****** [affiliate program Section end ] ****** */}
                    {/* ****** [Frequently Asked Questions Section start ] ****** */}
                    <div className="container-fluid py-5 frequentlyQuestion">
                        <div className="row">
                            <div className="col-12">
                                <div className="rewardOuter">
                                    <div className="row mx-0">
                                        <div className="col-12 px-0">
                                            <div className="innermain">
                                                <div className="row mx-0">
                                                    <div className="col-12 px-0 pb-sm-5 pb-4">
                                                        <div className="sectionHeading">Frequently Asked Questions</div>
                                                    </div>
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">Are there any banners I can use to advertise?</div>
                                                        <div className="answar">When you share your referral link with any of your friends, family or advertise the link and a player signup at our site that player
                                                            becomes your referral and they will earn you commissions &amp; extra rewards by playing on DAMBLE.
                                                        </div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">How much can I earn from my referral?</div>
                                                        <div className="answar">You can earn up to 50% of their NGR (Net Gaming Revenue).</div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">What is USD reward and how does it work?</div>
                                                        <div className="answar">There is 1000$ USD reward for each referral you bring to DAMBLE. This USD reward is given in 5 parts when your referral level up
                                                            from VIP11 til VIP 20.</div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">Are there any banners I can use to advertise?</div>
                                                        <div className="answar">Yes, we offer multiple banner sizes for your convenience. <span className="ms-2"><a href="javascript:;" className="text-decoration-none"> Click here to download. .</a></span> </div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">I have big audience how I can get special deals?</div>
                                                        <div className="answar">If you have a website with good traffic or social media account with big audience you can connect with us at <span className><a href="javascript:;" className="text-decoration-none"> partnership@damble.io </a></span>
                                                            for special deals.</div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">How many affiliate links can I create if I have different websites/accounts?</div>
                                                        <div className="answar">You can create up to 20 unique codes for different source of traffic.</div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">Can I see the data of my referral?</div>
                                                        <div className="answar">Yes, DAMBLE believes in total transparency and offer all data to the users like username, wager they have done, commissions
                                                            you made, when they registered, which of your link they used. All in your <span className><a href="javascript:;" className="text-decoration-none">  Affiliate Dashboard</a></span>.
                                                        </div>
                                                    </div>
                                                    <hr className="hrLine" />
                                                    <div className="col-12 px-0">
                                                        <div className="questionHeading">Can I send tip or reward to my referrals?</div>
                                                        <div className="answar">Yes, you can send your referrals tip in any supported coins.   <span className><a href="javascript:;" className="text-decoration-none">  Click here</a></span>.
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
                    {/* ****** [Frequently Asked Questions Section end ] ****** */}
                    {/*  **** Footer section *** */}
                </div>
            </main>
        </>
    );
};

export default Affiliate;
