import React, { Component } from "react";
import "./style.scss";
import sponsorshipImg1 from "../../assets/picture/sponsorship1.png";
import sponsorshipImg2 from "../../assets/picture/sponsorship2.png";
import sponsorshipImg3 from "../../assets/picture/sponsorship3.png";

export default function Sponsorship() {
  return (
    <div id="sponsorship" className="container-fluid lp-sponsorshipSection">
      <div className="container sponsorshipInner">
        <div className="row">
          <div className="col-10 borderd mx-auto"></div>
          <div className="col-md-12">
            <div className="sponsorshipHeading">sponsorship</div>
          </div>
          <div className="col-md-12">
            <div className="sponsorshipImages">
              <div className="row flex-wrap">
                <div className="col-md-12">
                  <div className="sponsorshipImg">
                    <img src={sponsorshipImg1} alt="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="sponsorshipImg sponsorshipImg2">
                    <img src={sponsorshipImg2} alt="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="sponsorshipImg">
                    <img src={sponsorshipImg3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
