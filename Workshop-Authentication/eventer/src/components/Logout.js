import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { logout } from '../services/logout';

export default function Logout() {
    let navigate = useNavigate();
    let { user, onLogout } = useContext(AuthContext);

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                navigate('/login');
            })
    }, [])

    onLogout();

    return null;
}