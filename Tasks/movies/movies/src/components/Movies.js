import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
            .then(res => {
                setMovies(res);
            })
    }, [])
    return (
        <>
            <h1>Movies</h1>

            <ul>
                {movies.map(x => <li>{x.title} - {x.year} - {x.time}</li>)}
            </ul>
        </>
    );
}