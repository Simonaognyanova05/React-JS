import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
    accessToken: ''
};

export function AuthProvider({
    children
}){
    let [user, setUser] = useState(initialState);

    const onLogin = (authData) => {
        setUser(authData);
    };

    return (
        <AuthContext.Provider value={{user, onLogin}}>
            {children}
        </AuthContext.Provider>
    )
}