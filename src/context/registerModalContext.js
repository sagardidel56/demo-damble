import React, { useState } from "react";


export const ModalContext = React.createContext(null)

const ModalContextProvider = ({ children }) => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    return <ModalContext.Provider value={{ isRegisterOpen, setIsRegisterOpen }}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
