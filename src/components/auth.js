import React, { useContext } from 'react'
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export default function Auth({children}) {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);

    const login = (user)=> {
        setUser(user);
    }

    const logout =() =>
    {
        setUser(null);
        navigate("/login")
    }

  return (
    <AuthContext.Provider value={{user, login, logout}} >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth =()=>
{
    return useContext(AuthContext);
}
