import { useEffect, useContext } from "react";
import { logout } from "../services/logout";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";

export function Logout() {
    let navigate = useNavigate();

    const { onLogout, user } = useContext(AuthContext);
    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                onLogout();
                navigate('/login');
            });
    }, [])


    return null;
}