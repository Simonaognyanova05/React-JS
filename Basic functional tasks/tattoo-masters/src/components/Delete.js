import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTattoo } from "../services/deleteTattoo";

export default function Delete() {
    const navigate = useNavigate();
    const { tattooId } = useParams();

    useEffect(() => {
        deleteTattoo(tattooId)
            .then(() => {
                navigate('/collection');
            }, []);
    })
    return null;
}