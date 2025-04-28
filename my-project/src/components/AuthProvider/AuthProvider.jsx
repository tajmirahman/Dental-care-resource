import React, { createContext } from 'react';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {


    
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;