import React from "react";

const SpinCard = () => {
    return (
        <div className="container-fluid pt-5 spinCardsection px-0">
            <div className="row gx-xl-2 g-xl-0 g-md-4 g-sm-3 g-2">
                <div className="col-xl-2 col-6 order-xl-1  order-2">
                    <div className="card bg-transparent rounded-0 rounded-start-4 border-0 spinCard">
                        <div className="card-body p-md-3 p-2">
                            <div className="spinImg position-relative rounded overflow-hidden">
                                <img src="assets/img/spinimg.png" alt="spinCard" className="img-fluid w-100 h-100" />
                                <div className="position-absolute cardContent">
                                    <div className="heading">JOIN  <span>VIP CLUB</span></div>
                                    <div className="heading">BECOME ROYALTY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-6 order-xl-2 order-3">
                    <div className="card bg-transparent rounded-0 rounded-start-4 border-0 spinCard">
                        <div className="card-body p-md-3 p-2">
                            <div className="spinImg position-relative rounded overflow-hidden">
                                <img src="assets/img/spin2.png" alt="spinCard" className="img-fluid w-100 h-100" />
                                <div className="position-absolute cardContent">
                                    <div className="heading">TWITTER  <span>SHARE &amp; WIN</span></div>
                                    <div className="heading">BECOME ROYALTY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-12 order-xl-3 order-1">
                    <div className="cardOuter rounded-top-4">
                        <div className="card bg-transparent rounded-0 rounded-start-4 border-0 spinCard spinMid">
                            <div className="card-body p-md-3 p-2 cardBody">
                                <div className="spinImg position-relative rounded overflow-hidden">
                                    <img src="assets/img/spin3.png" alt="spinCard" className="img-fluid w-100 h-100" />
                                    <div className="position-absolute cardContent">
                                        <div className="heading">GET 100  <span>NO DEPOSIT</span></div>
                                        <div className="heading">FREE SPINS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-6 order-4">
                    <div className="card bg-transparent rounded-0 rounded-start-4 border-0 spinCard">
                        <div className="card-body p-md-3 p-2">
                            <div className="spinImg position-relative rounded overflow-hidden">
                                <img src="assets/img/spin4.png" alt="spinCard" className="img-fluid w-100 h-100" />
                                <div className="position-absolute cardContent">
                                    <div className="heading">CHOOSE YOUR</div>
                                    <div className="heading"><span>WELCOME</span> PACK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-6 order-5">
                    <div className="card bg-transparent rounded-0 rounded-start-4 border-0 spinCard">
                        <div className="card-body p-md-3 p-2">
                            <div className="spinImg position-relative rounded overflow-hidden">
                                <img src="assets/img/spin5.png" alt="spinCard" className="img-fluid w-100 h-100" />
                                <div className="position-absolute cardContent">
                                    <div className="heading">BONUSES PROMO </div>
                                    <div className="heading">CODES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpinCard;
