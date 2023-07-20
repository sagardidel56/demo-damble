import { useContext } from "react"
import { SignInModalContext } from "../context/signInContext"


export const useSignInModal = () => {
    const { isSignInOpen, setIsSignInOpen } = useContext(SignInModalContext)
    return {
        isSignInOpen,
        setIsSignInOpen
    }
}