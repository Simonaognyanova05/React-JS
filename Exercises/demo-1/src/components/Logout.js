import { useEffect } from "react";
import { logout } from "../services/logout";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

export function Logout() {
    let navigate = useNavigate();

    const { onLogout, user } = useAuth();
    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                onLogout();
                navigate('/login');
            });
    }, [])


    return null;
}