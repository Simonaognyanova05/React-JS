import { useParams, useNavigate } from "react-router-dom";
import { updateMovie } from "../services/updateMovie";

export default function Update() {
    const navigate = useNavigate();
    const { movieId } = useParams();

    const updateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { title, year, time } = Object.fromEntries(formData);

        updateMovie(title, year, time, movieId)
            .then(res => {
                navigate('/movies');
            })
    }
    return (
        <>
            <h1>Update movie</h1>
            <form onSubmit={updateHandler}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="year" placeholder="Year" />
                <input type="text" name="time" placeholder="Time" />

                <input type="submit" value='Submit' />
            </form>
        </>
    );
}