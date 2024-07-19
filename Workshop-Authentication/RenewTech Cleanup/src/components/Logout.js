import { useNavigate } from "react-router-dom";
import { logout } from "../services/logout";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect, useContext } from "react";

export default function Logout() {
    const navigate = useNavigate();
    const { user, onLogout } = useContext(AuthContext);
    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                navigate('/');
            })
    }, [])
    //logout request
    onLogout();

    return null;
}