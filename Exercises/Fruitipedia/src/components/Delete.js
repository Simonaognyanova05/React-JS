import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteFruit } from '../services/deleteFruit';

export default function Delete() {
    let { fruitId } = useParams();
    let navigate = useNavigate();
    let { user } = useAuth();

    useEffect(() => {
        deleteFruit(fruitId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
    }, []);

    return null;
}