import React, { useContext, useEffect, useState } from "react";
import '../Firebase';
import {
    getAuth, createUserWithEmailAndPassword, updateProfile,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { async } from "@firebase/util";
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unSubscribe;
    },[]);

    // sign-up function 

    async function signUp(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signUp,
        login,
        logout
    }
    return (

        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}