import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

export default function Logout() {
    let navigate = useNavigate();

    let { onLogout } = useAuth();

    useEffect(() => {
        onLogout();
        navigate('/');
    }, []);

    return null;
}