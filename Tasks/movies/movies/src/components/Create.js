import { createMovie } from "../services/createMovie";

export default function Create() {

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {title, year, time} = Object.fromEntries(formData);

        createMovie(title, year, time)
        .then(res => {
            console.log(res);
        })
    }
    return (
        <>
            <h1>Create movie</h1>
            <form onSubmit={createHandler}>
                <input type="text" name="title" placeholder="Title"/>
                <input type="text" name="year" placeholder="Year"/>
                <input type="text" name="time" placeholder="Time"/>

                <input type="submit" value='Submit' />
            </form>
        </>
    );
}