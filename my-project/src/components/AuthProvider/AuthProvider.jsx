import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase.init';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

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

    const handleLogout=()=>{
        signOut(auth)
    }


    const authInfo={
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin
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