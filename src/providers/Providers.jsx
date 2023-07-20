import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "../context/authContext";
import ModalContextProvider from "../context/registerModalContext";
import SignInModalContextProvider from "../context/signInContext";
import { ToastContainer } from "react-toastify";
import BtAuthContextProvider from "../context/btAuthContext";
import SignUpModalContextProvider from "../context/signUpContext";

const Providers = ({ children }) => {
    return (
        <BrowserRouter basename="/">
            <AuthContextProvider>
                <BtAuthContextProvider>
                    <ModalContextProvider>
                        <SignUpModalContextProvider>
                            <SignInModalContextProvider>
                                {children}
                                <ToastContainer />
                            </SignInModalContextProvider>
                        </SignUpModalContextProvider>
                    </ModalContextProvider>
                </BtAuthContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    )
};

export default Providers;
