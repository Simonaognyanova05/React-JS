import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

let initialState = {
    _id: '',
    email: ''
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    const onLogin = (authData) => {
        setUser(authData);
        localStorage.setItem('user', JSON.stringify(authData));
    };

    const onLogout = () => {
        setUser(initialState);
        localStorage.removeItem('user');
    };
    return (
        <AuthContext.Provider value={{ user, onLogin, onLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authData = useContext(AuthContext);

    return authData;
}