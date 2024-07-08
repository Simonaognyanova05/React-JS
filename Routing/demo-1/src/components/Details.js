import { useState, useEffect } from "react";

export default function Details({
    match
}){
    let [game, setGame] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/games/${match.params.gameId}`)
        .then(res => res.json())
        .then(result => {
            setGame(result);
        })
    }, [])
    return (
        <p>{game.title}</p>
    );
}