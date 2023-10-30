"use client"
import { auth } from "@/libs/firebase";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [user, setUser] = useState({});


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
          if (currentUser) {
            setUser(auth)
          }
        });
      
        return () => unsubscribe();
      }, []);

      
    const userContextValue = {
        user,
        setUser
    }

    return(
        <UserContext.Provider value={userContextValue}>
                {children}
        </UserContext.Provider>
    )


}


