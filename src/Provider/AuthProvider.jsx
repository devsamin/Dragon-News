import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)
    
    console.log(user)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logoutUser = () =>{
        setloading(true)
        return signOut(auth)
    };
    const UpdateUesrProfile = (UpdateDate)=>{
        return updateProfile(auth.currentUser , UpdateDate)
    }
    const loginUser =(email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        logoutUser,
        loginUser,
        loading,
        UpdateUesrProfile
    };
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser),
            setloading(false)
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
