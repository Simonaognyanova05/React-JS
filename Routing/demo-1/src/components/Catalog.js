import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Catalog() {
    let [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(result => {
                setGames(result);
            })
    }, []);

    return (
        <>
            {games.map(game => (
                <div key={game._id} className="card">
                    <img src={game.imageUrl} className="card-img-top" alt={game.title} />
                    <div className="card-body">
                        <h5 className="card-title">{game.title}</h5>
                        <p className="card-text">{game.description}</p>
                        <Link to={`/games/${game._id}`} className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            ))}
        </>
    );
}