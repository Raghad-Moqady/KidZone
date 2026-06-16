import { createContext, useState } from "react";


export const AuthContext =createContext(); 

export default function AuthContextProvider({children}) {
    const [userAccessToken,setUserAccessToken]= useState(localStorage.getItem("userAccessToken")||null);
    
    const logout=()=>{
        localStorage.removeItem("userAccessToken");
        setUserAccessToken(null);
    }
    return (<AuthContext.Provider value={{userAccessToken,setUserAccessToken,logout}} >
        {children}
    </AuthContext.Provider>
    )
}