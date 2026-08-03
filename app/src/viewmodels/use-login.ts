import { useState } from "react";

export function useLogin(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility=()=>{
        console.log("PRESIONASTES EL ICONO ");
        
        setIsPasswordVisible((prev)=>!prev)
    }
    
    const fetchDataFromDataBase=()=>{
        
    }

    return{
        isPasswordVisible,
        togglePasswordVisibility
    }
}