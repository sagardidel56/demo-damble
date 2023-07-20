import React from 'react';
import './style.scss';
import casino from '../../assets/picture/casino.svg';
import sports from '../../assets/picture/sports.svg';
import poker from '../../assets/picture/poker.svg';
import experience from '../../assets/picture/experience.png';
import team from '../../assets/picture/Teamwork.png';
import { useRegisterModal } from '../../hooks/useRegisterModal';

const RegisterCard = () => {
  const { isRegisterOpen, setIsRegisterOpen } = useRegisterModal();

  return (
    <div id='Products' className='container-fluid'>
      <div className="container lp-cardSection">
        <div className='cardInner'>
          <div className='row gy-4 gy-sm-0'>
            <div className='col-sm-6 ps-xl-5 pe-xl-4'>
              <div className='row justify-content-center gy-4 gy-md-5'>
                <div className='col-md-12'>
                  <div className='card cardOuterBg1'>
                    <div className='cardBg card1 h-100'>
                      <div className='row h-100'>
                        <div className='col-md-12'>
                          <div className='cardheading d-flex align-items-center'>
                            <div className='cardHeadingImg'>
                              <img src={casino} alt="" />
                            </div>
                            CASINO
                          </div>
                        </div>
                        <div className='col-12 col-12 d-flex align-items-end justify-content-start'>
                          <div className='cardPara'>
                            pLAY GAMES, WIN MONEY
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-10 col-sm-12 col-md-10'>
                  <div className='cardButton cardButtonBg1'
                    onClick={() => setIsRegisterOpen(true)}
                  >
                    Register & get 360% bonus
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 pe-xl-5 ps-xl-4'>
              <div className='row justify-content-center gy-4 gy-md-5'>
                <div className="col-md-12">
                  <div className='card cardOuterBg2'>
                    <div className='cardBg card2 h-100'>
                      <div className='row h-100'>
                        <div className='col-md-12'>
                          <div className='cardheading d-flex align-items-center'>
                            <div className='cardHeadingImg'>
                              <img src={sports} alt="" />
                            </div>
                            SPORTS
                          </div>
                        </div>
                        <div className='col-12 col-12 d-flex align-items-end justify-content-start'>
                          <div className='cardPara'>
                            Bet on sports & Esports
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-10 col-sm-12 col-md-10'>
                  <div className='cardButton cardButtonBg2'
                    onClick={() => setIsRegisterOpen(true)}
                  >
                    Register & get 360% bonus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lp-cardSection2 container'>
        <div className='row gy-4'>
          <div className='col-md-12'>
            <div className="card2Inner">
              <div className='cardSection2Body'>
                <div className='row align-items-center flex-nowrap mx-0 h-100'>
                  <div className='col ps-0'>
                    <div className='cardSection2Content'>
                      Bet on your favorite sports events, or simply enjoy more than <span>10,000</span> games from BlackJack, Poker, Roulette andslots.
                    </div>
                  </div>
                  <div className="col-auto px-0">
                    <div className="cardSection2Img cardSectionImg1">
                      <img src={poker} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className="card2Inner">
              <div className='cardSection2Body'>
                <div className='row align-items-center flex-nowrap mx-0 h-100'>
                  <div className='col px-0'>
                    <div className='cardSection2Content'>
                      Damble's aim is to provide users with the best gaming experience a player-centric approach, and to satisfy millions of bettors across the globe.
                    </div>
                  </div>
                  <div className="col-auto pe-0">
                    <div className="cardSection2Img cardSectionImg2">
                      <img src={experience} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className="card2Inner">
              <div className='cardSection2Body'>
                <div className='row align-items-center flex-nowrap mx-0 h-100'>
                  <div className='col'>
                    <div className='cardSection2Content'>
                      Damble has its priority seton its community, ensuring an everlasting and endlessly entertaining gambling experience
                    </div>
                  </div>
                  <div className="col-auto pe-0">
                    <div className="cardSection2Img cardSectionImg3">
                      <img src={team} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterCard