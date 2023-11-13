/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Configaration/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // user set state
    const [user, setUser] = useState(null)
    // user set loading browser
    const [loading, setLoading] = useState(true)


    // create and login user with google
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }



    // create new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login User
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // logOut user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    // user state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (newUser) => {
            setUser(newUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    // user information send
    const userInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        loginUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;