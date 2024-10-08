import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();


const initialState = ({
    _id: '',
    email: '',
    accessToken: ''
})
export const AuthProvider = ({
    children
}) => {

    let [state, setState] = useState(initialState);

    const onLogin = (authData) => {
        setState(authData)
    }
    return (
        <AuthContext.Provider value={{state, onLogin}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authState = useContext(AuthContext);

    return authState;
}