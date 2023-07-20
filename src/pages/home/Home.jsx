import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import RegisterCard from '../../components/registerCard/RegisterCard'
import AboutCard from '../../components/aboutCard/AboutCard'
import WhatIsDamble from '../../components/whatIsDamble/WhatIsDamble'
import WhyGamble from '../../components/whyGambal/WhyGamble'
import Partners from '../../components/partners/Partners';
import FooterSection from '../../components/footer/Footer'
import Sponsorship from '../../components/sponsorShip/Sponsorship'

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutCard />
            <RegisterCard />
            <WhatIsDamble />
            <WhyGamble />
            <Sponsorship />
            <Partners />
            <FooterSection />
        </>
    )
}

export default Home