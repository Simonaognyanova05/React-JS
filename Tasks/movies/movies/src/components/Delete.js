import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteMovie } from "../services/deleteMovie";

export default function Delete(){
    let {movieId} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        deleteMovie(movieId)
        .then(res => {
            navigate('/');
        })
    }, []);

    return null;
}