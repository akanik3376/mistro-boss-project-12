/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Configaration/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // user set state
    const [user, setUser] = useState(null)
    // user set loading browser
    const [loading, setLoading] = useState(true)

    //gwt token
    const axiosPublic = useAxiosPublic()

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

    // update user
    const updateProfileUser = (name, photo) => {
        setLoading()
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
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
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }

                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [axiosPublic])

    // user information send
    const userInfo = {
        user,
        loading,
        googleLogin,
        updateProfileUser,
        createUser,
        loginUser,
        logoutUser
    }
    // console.log(user)
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;