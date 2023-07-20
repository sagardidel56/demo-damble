import React from 'react'
import './style.scss'
import Logo from '../../assets/picture/logo.png'
import Ethereum from '../../assets/picture/Ethereum_logo.png'
import Metamask from '../../assets/picture/MetaMask.svg'
import Crypto from '../../assets/picture/crypto.png'
import Sumsung from '../../assets/picture/samsung.svg'
import MasterCard from '../../assets/picture/Mastercard.svg'
import ApplePay from '../../assets/picture/applePay.svg'
import GooglePay from '../../assets/picture/googlePay.svg'
import VisaCard from '../../assets/picture/visaCard.svg'

// Crypto
import Tether from '../../assets/picture/tether-usdt-logo.png'
import Xcrypto from '../../assets/picture/xcrypto.svg'
import Plokadot from '../../assets/picture/Polkadot-Symbol.svg'
import Matic from '../../assets/picture/matic-logo.png'
import Dogicoin from '../../assets/picture/dogecoin-doge-logo.svg'
import Solana from '../../assets/picture/solana-sol-logo.svg'
import Bnb from '../../assets/picture/bnb-bnb-logo.svg'
import Cardano from '../../assets/picture/cardano_ada-512.svg'
import UsdCoin from '../../assets/picture/usd-coin-usdc-logo.png'

// Bard
import GameCare from '../../assets/picture/gamecare.svg'
import Aware from '../../assets/picture/aware.png'
import Responsible from '../../assets/picture/responsible.svg'
import { useRegisterModal } from '../../hooks/useRegisterModal'

const Footer = () => {
    const { isRegisterOpen, setIsRegisterOpen } = useRegisterModal();
    return (
        <>
            <div className="container-fluid">
                <div className='container lp-footerSection my-5 pt-5'>
                    <div className='row gap-md-5 gap-4'>
                        <div className='col-10 mx-auto'><div className='borderd'></div></div>
                        <div className='col-12 text-center text-white paymentHeading text-uppercase py-2'>payment methods</div>
                        <div className='col-lg-10 col-12 mx-auto mb5 pb3'>
                            <div className='cardLogo card border-0 shadow-none'>
                                <div className='card-body '>
                                    <div className='row mx-0 justify-content-center align-items-center gap-2'>
                                        <div className='col-auto d-md-block d-none'>
                                            <div className='logos'>
                                                <img src={Ethereum} alt='Ethereum' />
                                            </div>
                                        </div>
                                        <div className='col-auto d-md-block d-none'>
                                            <div className='logos'>
                                                <img src={Metamask} alt='Metamask' />
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='logos'>
                                                <img src={Crypto} alt='Crypto' />
                                            </div>
                                        </div>
                                        <div className='col-auto d-md-block d-none'>
                                            <div className='logos'>
                                                <img src={Sumsung} alt='Sumsung' />
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='logos'>
                                                <img src={MasterCard} alt='MasterCard' />
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='logos'>
                                                <img src={ApplePay} alt='ApplePay' />
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='logos'>
                                                <img src={GooglePay} alt='GooglePay' />
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <div className='logos'>
                                                <img src={VisaCard} alt='VisaCard' />
                                            </div>
                                        </div>
                                        <div className='col-auto d-md-none d-block'>
                                            <div className='logos'>
                                                <img src={Sumsung} alt='Sumsung' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='cryptoLogo card border-0 shadow-none'>
                                <div className='card-body'>
                                    <div className='row mx-0 gx-0 align-items-center'>
                                        <div className='col'>
                                            <div className='row mx-0 justify-content-center align-items-center g-3'>
                                                <div className='col-auto'><div className='logos'><img src={Crypto} alt='Crypto' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Ethereum} alt='Ethereum' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Tether} alt='Tether' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Xcrypto} alt='Xcrypto' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Plokadot} alt='Plokadot' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Matic} alt='Matic' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Dogicoin} alt='Dogicoin' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Solana} alt='Solana' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Bnb} alt='Bnb' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={Cardano} alt='Cardano' /></div></div>
                                                <div className='col-auto'><div className='logos'><img src={UsdCoin} alt='UsdCoin' /></div></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-auto mt-lg-0 mt-5'>
                                            <div className='row mx-0 align-items-center'>
                                                <div className='col'><div className='ragisterbonus text-white text-md-start text-center'>REGISTER AND GET <span>300%</span> BONUS</div></div>
                                                <div className='col-md-auto'>
                                                    <button
                                                        onClick={() => setIsRegisterOpen(true)}
                                                        type='button' className='ragisterBtn d-flex align-items-center justify-content-center text-white border-0 px-3 mx-md-0 mx-auto mt-md-0 mt-4'>
                                                        Register now!
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-lg-5 mt-md-4 mt-3 mb-lg-3'>
                            <ul className='list-unstyled navContent d-flex align-items-center justify-content-md-center justify-content-between gap-xl-5 gap-sm-4 gap-2  m-0'>
                                <li className='navLink fw-semibold text-center text-white'>About Us</li>
                                <li className='navLink fw-semibold text-center text-white'>AML Policy</li>
                                <li className='navLink fw-semibold text-center text-white'>Responsible Gambling</li>
                                <li className='navLink fw-semibold text-center text-white'>Terms & Condition</li>
                            </ul>
                        </div>
                        <div className='col-12 mb5'>
                            <div className='bardcard card border-0 shadow-none'>
                                <div className='card-body py-4'>
                                    <div className='row mx-0 align-items-center '>
                                        <div className='col-4 text-center  '>
                                            <div className='logos d-inline-block'>
                                                <img src={GameCare} alt='GameCare' />
                                            </div>
                                        </div>
                                        <div className='col-4 text-center'>
                                            <div className='logos d-inline-block'>
                                                <img src={Aware} alt='Aware' />
                                            </div>
                                        </div>
                                        <div className='col-4 text-center'>
                                            <div className='logos d-inline-block'>
                                                <img src={Responsible} alt='Responsible' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9 col-12 mx-auto mb5'>
                            <div className='democontent fw-normal text-center text-white'>
                                If you have any questions about our AML and KYC Policy or if you have any complains about our AML and KYC Policy or about the checks done on your Account and your Person, please contact us By email: info@damble.io
                            </div>
                        </div>
                        <div className='col-lg-10 mx-auto'><div className='borderd smBorderd'></div></div>
                        <div className='col-12 text-center'>
                            <div className='logoImg d-inline-block'><img src={Logo} alt='Logo' /></div>
                            <div className='text-center copyright text-white mt-md-4 mt-3'>Copyright © 2023  Damble. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer