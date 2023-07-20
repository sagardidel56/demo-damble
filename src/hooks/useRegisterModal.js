import { useContext } from "react"
import { ModalContext } from "../context/registerModalContext"


export const useRegisterModal = () => {
    const { isRegisterOpen, setIsRegisterOpen } = useContext(ModalContext)
    return {
        isRegisterOpen,
        setIsRegisterOpen
    }
}