import React, { createContext, useCallback } from "react";
import api from '../services/api';

interface   ICredentions {
    email: string;
    password: string;
}

interface IAuthContext {
    name: string;
    signIn(credentions:ICredentions): Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({children}) => {
    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password
        });
        console.log(response.data)
    }, [])
    return (
        <AuthContext.Provider value = {{name: 'Ronald', signIn }} >
            {children}
        </AuthContext.Provider>

    )
}
export default AuthContext;
