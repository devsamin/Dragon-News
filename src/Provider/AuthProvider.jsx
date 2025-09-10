import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"; // ✅ import করতে হবে
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        user,
        setUser,
        createUser,
    };
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe()
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
