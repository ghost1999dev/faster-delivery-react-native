import { useState } from "react";

export function useLogin(){

    const [isPasswordVisibility, setIsPasswordVisibility] = useState(false)

    const togglePasswordVisibility=()=>{
        console.log("PRESIONASTES EL TOGGLE");
        
        setIsPasswordVisibility((prev)=> !prev)
    }



    return {
        isPasswordVisibility,
        togglePasswordVisibility
    }


}