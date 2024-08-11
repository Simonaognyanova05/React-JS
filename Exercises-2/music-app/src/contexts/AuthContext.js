import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    const onLogin = (authData) => {
        setUser(authData);
        localStorage.setItem('user', JSON.stringify(authData));
    };

    return (
        <AuthContext.Provider value={{ user, onLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    let authResult = useContext(AuthContext);

    return authResult;
}