import React from 'react'
import './Style.scss'
import heroImg from '../../assets/picture/players.png'
import { useRegisterModal } from '../../hooks/useRegisterModal';

const HeroSection = () => {
  const { isRegisterOpen, setIsRegisterOpen } = useRegisterModal();
  return (
    <>
      <div  className="container-fluid lp-heroSection">
        <div className="container  sectionInner">
          <div className="row mx-0 mainOuter">
            <div className="col-12 main">
              <div className="row justify-content-center">
                <div className="col-12 secHeading">Get ready to Change the <b>GAME !</b></div>
                <div className="col-12 secSubHeading">Online’s Greatest <b>Casino!</b></div>
                <div className="col-12 secText">
                  Enjoy thousands of Casino games, fast withdrawals and 24/7 live support.
                  ll you need from a Casino in one place!
                </div>
                <div className="col-12">
                  <div className="heroImg">
                    <img src={heroImg} className='w-100 h-100' alt="" />
                  </div>
                </div>
                <div className="col-12 TextBox">
                  <div className="row">
                    <div className="col-12 boxSubHeading">REGISTER YOUR EMAIL  & <b>GET</b> REWARD</div>
                    <div className="col-12 boxHeading">Up To <b>$ 20.000</b></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row mt-4">
                    <div className="col-auto mx-auto">
                      <button type='button' onClick={() => setIsRegisterOpen(true)} className="heroBtn">Register now!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection