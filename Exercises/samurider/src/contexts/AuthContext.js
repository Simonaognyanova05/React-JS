import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
};

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(initialState);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const authData = useContext(AuthContext);

    return authData;
}