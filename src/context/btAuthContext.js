import { createContext, useEffect, useState } from "react";
import { BT_TOKEN_NAME } from "../constants";


export const BtAuthContext = createContext(null)

const BtAuthContextProvider = ({ children }) => {
    // const [token, setToken] = useContext(AuthContext)
    const [btToken, setBtToken] = useState(() => {
        const storeToken = localStorage.getItem(BT_TOKEN_NAME)
        return storeToken
    })
    useEffect(() => {
        if (btToken) {
            localStorage.setItem(BT_TOKEN_NAME, btToken);
        } else {
            //remove token
            // localStorage.removeItem(TOKEN_NAME);
        }
    }, [btToken])

    return (
        <BtAuthContext.Provider value={{ btToken, setBtToken }}>{children}</BtAuthContext.Provider>
    )
}

export default BtAuthContextProvider