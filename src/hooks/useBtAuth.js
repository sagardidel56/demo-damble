import React, { useContext } from "react";
import { BtAuthContext } from "../context/btAuthContext";

export const useBtAuth = () => {
    const { btToken, setBtToken } = useContext(BtAuthContext)
    return {
        btToken, setBtToken
    }
};


