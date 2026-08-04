import { useState } from "react";
import { AuthService } from "../services/auth.service";

export function useLogin(){
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    console.log("VALOR EMAIL",email);
    console.log("VALOR PASSWORD",passWord);
    

    const togglePasswordVisibility=()=>{
        setIsPasswordVisible((prev)=>!prev)
    }
    
    const handleLogin=async()=>{
        if(!email || !passWord){
            setErrorMessage("Por favor, completar el correo y la contrasenia")
            return
        }
        setErrorMessage(null)
        setIsLoading(true)

        try {
            const data = await AuthService.login(email, passWord)

            console.log("TOKEN",data.token);
            
        } catch (error:any) {
            setErrorMessage(error.message)
        }finally{
            setIsLoading(false)
        }


    }

    return{
        isPasswordVisible,
        togglePasswordVisibility,
        email,
        passWord,
        handleLogin,
        errorMessage,
        setEmail,
        setPassWord,
        isLoading
    }
}