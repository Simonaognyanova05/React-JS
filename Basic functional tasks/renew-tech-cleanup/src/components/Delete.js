import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteSolution } from '../services/deleteSolution';

export default function Delete() {
    let navigate = useNavigate();
    let { solutionId } = useParams();

    useEffect(() => {
        deleteSolution(solutionId)
            .then(() => {
                navigate('/solutions');
            })
    }, [])
    return null;
}