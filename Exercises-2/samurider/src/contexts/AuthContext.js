import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

let initialState = {
    _id: '',
    email: '',
    accessToken: ''
}
export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(initialState)

    const onLogin = (authData) => {
        setUser(authData);
    };

    const onRegister = (authData) => {
        setUser(authData);
    };

    const onLogout = () => {
        setUser(initialState);
    };
    return (
        <AuthContext.Provider value={{ user, onLogin, onRegister, onLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authData = useContext(AuthContext);

    return authData;
}