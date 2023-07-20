import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ROUTES_CONST } from "../constants/routeConstant";
import Home from "../pages/home/Home";
import Casino from "../pages/casinoPage/Casino";
import Sports from "../pages/sportsPage/Sports";
import GiveAwayPage from '../pages/giveAwayPage/GiveAwayPage'
import Affiliate from "../pages/affiliate/Affiliate";
import VipClub from "../pages/VipClub/VipClub";
import Promotions from "../pages/promotions/Promotions";
import AffiliateDashboard from "../pages/AffiliateDashboard/AffiliateDashboard";
import GlobalSetting from "../pages/globalSetting/GlobalSetting";

const RoutesComp = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES_CONST.INDEX} element={<Home />} />
                <Route path={ROUTES_CONST.CASINO} element={<Casino />} />
                <Route path={ROUTES_CONST.SPORTS} element={<Sports />} />
                <Route path={ROUTES_CONST.GIVEAWAY} element={<GiveAwayPage />} />
                <Route path={ROUTES_CONST.AFFILIATE} element={<Affiliate />} />
                <Route path={ROUTES_CONST.AFFILIATE_DASHBOARD} element={<AffiliateDashboard />} />
                <Route path={ROUTES_CONST.VIP_CLUB} element={<VipClub />} />
                <Route path={ROUTES_CONST.PROMOTIONS} element={<Promotions />} />
                <Route path={ROUTES_CONST.GLOBAL_SETTINGS} element={<GlobalSetting />} />
            </Routes>
        </>
    );
};

export default RoutesComp;
