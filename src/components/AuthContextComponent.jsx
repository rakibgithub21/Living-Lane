import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthContextComponent = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // console.log(user);

    //create user:
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user:
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    

    // update user profile:
    const updateUser = (name, image, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            email: email


        })
    }

    //sign out user

    const logout = () => {
        setUser(null)
        setLoading(true)
        return signOut(auth)
    }

    // google login:

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // observer:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })

        return ()=>unsubscribe()
    }, [])


    const contextData = {
        user,
        setUser,
        createUser,
        signInUser,
        updateUser,
        logout,
        googleLogin,
        loading,
        setLoading


    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextComponent;