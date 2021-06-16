import React, { createContext, useCallback, useState, useContext} from "react";
import api from '../services/api';

interface IAuthState {
    token: string;
    user: unknown;
}

interface   ICredentions {
    email: string;
    password: string;
}

interface IAuthContext {
    user: unknown;
    signIn(credentions:ICredentions): Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

 const AuthProvider: React.FC = ({children}) => {
    const [ data, setData ] = useState<IAuthState>(() => {
        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user');

        if(token && user ) {
            return { token, user: JSON.parse(user) };
        }
        return {} as IAuthState
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password
        });

        const { token, user } = response.data;

        localStorage.setItem('@GoBarber:token', token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(user));

        setData({ token, user })
    }, [])
    return (
        <AuthContext.Provider value = {{user: data.user, signIn }} >
            {children}
        </AuthContext.Provider>

    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be userd within an AuthProvider')
    }

    return context

}
export { AuthProvider, useAuth };
