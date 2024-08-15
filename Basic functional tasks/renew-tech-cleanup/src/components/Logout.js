import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    const { onLogout } = useAuth();

    onLogout();
    navigate('/');
    return null;
}