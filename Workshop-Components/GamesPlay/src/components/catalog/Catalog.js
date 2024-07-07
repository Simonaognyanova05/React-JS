import { useState, useEffect } from 'react';
import { getCatalogGames } from '../../services/getCatalogGames';
import GameTemplate from "./GameTemplate";

export default function Catalog() {
    let [games, setGames] = useState([]);

    useEffect(() => {
        getCatalogGames()
            .then(result => {
                setGames(result);
            })
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(x => <GameTemplate key={x._id} game={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}