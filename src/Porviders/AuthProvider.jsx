import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

import toast from "react-hot-toast";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
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
    }, []);


console.log(user)

    const authInfo = { user, loading, setUser, createUser, signIn, googleSignIn, githubSignIn, logOut }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;