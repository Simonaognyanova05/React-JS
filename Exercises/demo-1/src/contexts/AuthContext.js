import { createContext, useContext, useState } from "react";

export let AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
    accessToken: ''
}
export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

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
    )

}

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}