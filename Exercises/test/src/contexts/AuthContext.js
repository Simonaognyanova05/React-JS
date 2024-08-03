import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
    accessToken: ''
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : initialState;
    });

    useEffect(() => {
        if (user._id) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const onLogin = (authData) => {
        setUser(authData);
    };

    const onRegister = (authData) => {
        setUser(authData);
    };
    return (
        <AuthContext.Provider value={{ user, onLogin, onRegister }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    let authData = useContext(AuthContext);

    return authData;
}