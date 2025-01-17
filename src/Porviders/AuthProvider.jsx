import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

import toast from "react-hot-toast";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    };


    // github 
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)

    };


    //  Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            toast.success('Successfully Registered!');
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }
    }, [reload]);

    // Update users profile
    const updateUserProfile = (name, image) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }

        )
    }
    const authInfo = { user, loading, setReload, setUser, createUser, signIn, googleSignIn, githubSignIn, logOut,updateUserProfile  }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;