import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { remove } from '../services/remove';

export default function Delete() {
    const navigate = useNavigate();
    const { droneId } = useParams();

    useEffect(() => {
        remove(droneId)
            .then(() => {
                navigate('/dashboard');
            })
    }, []);

    return null;
}