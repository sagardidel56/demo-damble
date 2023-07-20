import { useContext } from "react"
import { SignUpModalContext } from "../context/signUpContext"


export const useSignUpModal = () => {
    const { isSignUpOpen, setIsSignUpOpen } = useContext(SignUpModalContext)
    return {
        isSignUpOpen,
        setIsSignUpOpen
    }
}