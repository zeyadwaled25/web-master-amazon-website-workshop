import React, { createContext, useState } from 'react'
import {jwtDecode} from 'jwt-decode'

export const AuthContext=createContext(false)
export default function AuthContextProvider({children}) {
    

    const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("authToken")!==null)
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
        </AuthContext.Provider>
  )
}

