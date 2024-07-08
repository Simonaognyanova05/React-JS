import { useState, useEffect } from "react";

export default function Details({
    match,
    history
}) {
    let [game, setGame] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/games/${match.params.gameId}`)
            .then(res => res.json())
            .then(result => {
                setGame(result);
            })
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        history.push('/');
    }
    return (
        <>
            <p>{game.title}</p>

            <form onSubmit={onSubmitHandler}>
                <input type="text" />
                <input type="submit" value="submit" />

            </form>
        </>
    );
}