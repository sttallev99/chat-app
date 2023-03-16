import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react"
import { auth } from "../firebase";

export const AuthConntext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user)
        });

        return () => {
            unsub();
        }
    }, []);

    return (
    <AuthConntext.Provider value={{currentUser}}>
        {children}
    </AuthConntext.Provider>
    )
}