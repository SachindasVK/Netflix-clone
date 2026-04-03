import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const UserAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return(
     <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;
