import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/logout';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            await logout();
            navigate('/');
        };

        performLogout();
    }, [navigate]);

    return (
        <div>
            Logging out...
        </div>
    );
}
