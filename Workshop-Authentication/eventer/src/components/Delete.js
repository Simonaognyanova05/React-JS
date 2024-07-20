import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { remove } from '../services/remove';

export default function Delete() {
    let navigate = useNavigate();
    let { eventId } = useParams();
    let { user } = useContext(AuthContext);

    useEffect(() => {
        remove(eventId, user.accessToken)
            .then(() => {
                navigate('/dashboard')
            })
    }, []);

    return null;

}