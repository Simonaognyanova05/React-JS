import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteAlbum } from '../services/deleteAlbum';


export default function Delete() {
    const navigate = useNavigate();
    const { albumId } = useParams();

    useEffect(() => {
        deleteAlbum(albumId)
            .then(() => {
                navigate('/catalog');
            })
    }, [])
    return null;
}