import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function ContextProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("token"));
    } catch {
      return null;
    }
  });
  const [type,setType] = useState(null)
  useEffect(()=>{
    setType(JSON.parse(localStorage.getItem('type')))
  },[])
  

  return (
    <AuthContext.Provider value={{ auth, setAuth,type,setType }}>
      {children}
    </AuthContext.Provider>
  );
}
