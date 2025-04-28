import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const googleProvider = new GoogleAuthProvider();
 
    const handleRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const handleUpdateUser=(name,image)=>{
        return updateProfile(auth.currentUser,{
                displayName:name, photoURL:image
        })
    }

    const handleLogout=()=>{
        signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unsubscribe();
        }

    },[])


    const authInfo={
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        user,
        handleUpdateUser,
        loading
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;