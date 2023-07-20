import React from "react";

const DambleTable = () => {
    return (
        <div className="container-fluid dambleTable">
            <div className="row gap-5">
                <div className="col-12 pt-5 px-0">
                    <div className="sectionInner">
                        <div className="tableCard row mx-0">
                            <div className="col-12 px-0">
                                <div className="row mx-0">
                                    <div className="col-12 px-0">
                                        <nav>
                                            <ul className="nav nav-tabs border-0 d-sm-inline-flex d-flex" id="myTab" role="tablist ">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link border-0 shadow-none rounded-pill active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All bets</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link border-0 shadow-none rounded-pill" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">High rollers</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link border-0 shadow-none rounded-pill" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Rare wins</button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-12  px-0">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                                <div className="table-responsive">
                                                    <table className="table align-middle text-white text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Time</th>
                                                                <th scope="col">Player</th>
                                                                <th scope="col">Bet Amount</th>
                                                                <th scope="col">Multiplier</th>
                                                                <th scope="col">Payout</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                                <div className="table-responsive">
                                                    <table className="table align-middle text-white">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Time</th>
                                                                <th scope="col">Player</th>
                                                                <th scope="col">Bet Amount</th>
                                                                <th scope="col">Multiplier</th>
                                                                <th scope="col">Payout</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                                                <div className="table-responsive">
                                                    <table className="table align-middle text-white">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Time</th>
                                                                <th scope="col">Player</th>
                                                                <th scope="col">Bet Amount</th>
                                                                <th scope="col">Multiplier</th>
                                                                <th scope="col">Payout</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>game name</td>
                                                                <td>00:00:00PM</td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center player me-2"><img src="assets/img/user.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>Username
                                                                    </a>
                                                                </td>
                                                                <td> <span className="badge Multiplier">x0.0</span></td>
                                                                <td>
                                                                    <a href="#" className="d-flex align-items-center text-decoration-none">
                                                                        <span className="d-flex align-items-center amount me-1"><img src="assets/img/bitcoin.png" alt="playeruser" className="img-fluid h-100 w-100" /> </span>00000000
                                                                    </a>
                                                                </td>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DambleTable;
