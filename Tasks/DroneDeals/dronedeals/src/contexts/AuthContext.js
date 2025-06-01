import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: ''
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

    const onRegister = (authData) => {
        setUser(authData);
    };

    const onLogout = () => {
        setUser(initialState);
    };

    return (
        <AuthContext.Provider value={{ user, onRegister, onLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    let authData = useContext(AuthContext);

    return authData;
}