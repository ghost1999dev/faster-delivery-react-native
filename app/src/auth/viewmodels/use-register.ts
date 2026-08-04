import { useState } from "react";
import { AuthService } from "../services/auth.service";
import { useRouter } from "expo-router";

export function useRegister(){
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handleRegister=async()=>{
        if(!fullName || !email || !password || !confirmPassword || !phone){
            setErrorMessage("Todos los campos son obligatorios")
            return
        }
        if(password !== confirmPassword){
            setErrorMessage("Las contrasenias no coinciden")
            return
        }

        setErrorMessage(null)
        setIsLoading(true)
        try {
            const response = await AuthService.register(fullName,lastName,phone,email,password)
            router.replace("/(public)")
        } catch (error:any) {
            setErrorMessage(error.message)
        }finally{
            setIsLoading(false)
        }
    }
    return{
        fullName,
        lastName,
        password,
        confirmPassword,
        email,
        handleRegister,
        setEmail,
        setFullName,
        setLastName,
        setPassword,
        setConfirmPassword,
        errorMessage,
        isLoading,
        phone,
        setPhone
    }
}