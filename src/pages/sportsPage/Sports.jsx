import React, { useEffect, useRef, useState } from "react";
import { errorToaster } from "../../utils/toaster";
import { Spinner } from 'react-bootstrap'
import AppFooter from "../../components/AppFooter/AppFooter";
import { useSignInModal } from "../../hooks/useSignInModal";
import { useBtAuth } from "../../hooks/useBtAuth";
import { useAuth } from "../../hooks/useAuth";
import { BT_TOKEN_NAME, TOKEN_NAME } from "../../constants";
import { useSignUpModal } from '../../hooks/useSignUpModal'
let rendererInstance;

const getInstance = async ({ setIsSignInOpen, setIsSignUpOpen, btToken }) => {
    console.log("btToken===>>>", btToken)
    rendererInstance = new window.BTRenderer()
    // console.log("rendererInstance", rendererInstance)
    try {
        await rendererInstance.initialize({
            brand_id: "2285388016832876544",
            token: btToken ? btToken : null,
            onTokenExpired: function () {
                // localStorage.removeItem('authToken');
                // setToken(null);
                // window.location.reload(false);
                // alert("onTokenExpired")
                // errorToaster("Token Expired")
            },
            themeName: "default-table",//for now 
            lang: "en",
            target: document.getElementById('betby'),
            betSlipOffsetTop: 0,
            betSlipOffsetRight: 0,
            betSlipOffsetBottom: 0,
            betslipZIndex: 0,
            cssUrls: [
                "https://fonts.googleapis.com/css2?family=Rubik",
            ],
            fontFamilies: ['Rubik', 'Montserrat, sans-serif', 'Roboto, sans-serif'],
            onRouteChange: function () { },
            onLogin: () => {
                setIsSignInOpen(true)
            },
            onRegister: () => {
                // alert('register pop up') ///remove alerts
                setIsSignUpOpen(true)
            },
            onSessionRefresh: function () {
                // setToken(null);
                alert('refreshed')
                console.log('session refresh');
                // localStorage.removeItem(BT_TOKEN_NAME);
                // localStorage.removeItem(TOKEN_NAME);
                // window.location.reload(false);
            },
            onSessionExpired: function () {
                alert('Session expired!');
                // localStorage.removeItem('authToken');
                // window.location.reload(false);
            },
            onBetSlipStateChange: function () { }
        });
    } catch (error) {
        errorToaster('Something went wrong while trying to login')
    }

}
const Sports = () => {
    const rendererRef = useRef();
    // const [isLoading, setIsLoading] = useState(true)
    const { setIsSignInOpen } = useSignInModal()
    const { isSignUpOpen, setIsSignUpOpen } = useSignUpModal()
    const { btToken } = useBtAuth()
    const { token } = useAuth()

    useEffect(() => {
        // var bt = new BTRenderer().initialize({
        //     brand_id: "11111111111111111",
        //     token: "",
        //     onTokenExpired: function () { },
        //     themeName: "default",
        //     lang: "lang",
        //     target: document.getElementById('betby'),
        //     betSlipOffsetTop: 0,
        //     betslipZIndex: 999,
        //     onRouteChange: function () { },
        //     onLogin: function () { },
        //     onRegister: function () { },
        //     onSessionRefresh: function () { },
        //     onBetSlipStateChange: function () { }
        // })

        const initializeRenderer = async () => {
            try {
                await getInstance({ setIsSignInOpen, setIsSignUpOpen, btToken, token })
            } catch (error) {
                errorToaster("Something went wrong")
            }
        }

        initializeRenderer()
        console.log(rendererInstance)
        rendererRef.current = rendererInstance;
        return () => {
            rendererRef.current = null;
            rendererInstance.kill();
        };

    }, [btToken])
    return (
        <>
            <div id="betby" className="align-items-center " style={{ minHeight: "100vh", minWidth: "100vw", marginTop: "62px" }}>
            </div>
            {/*  **** Footer section *** */}
            {/* <AppFooter /> */}
        </>
    );
};

export default Sports;
