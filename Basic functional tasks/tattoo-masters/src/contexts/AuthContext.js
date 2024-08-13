import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: ''
};

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    const onRegister = (authData) => {
        setUser(authData);
        localStorage.setItem('user', JSON.stringify(authData));
    };

    const onLogin = (authData) => {
        setUser(authData);
        localStorage.setItem('user', JSON.stringify(authData));
    }

    return (
        <AuthContext.Provider value={{ user, onRegister, onLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authResult = useContext(AuthContext);

    return authResult;
}