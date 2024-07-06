import { useEffect, useState } from 'react';
import CatalogTemplate from './CatalogTemplate';
import { getAll } from '../../services/gameService'

export default function CatalogPage() {

    let [games, setGames] = useState([]);

    useEffect(() => {
        getAll()
            .then(gamesResult => {
                setGames(gamesResult);
            })
    }, [])
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 ? games.map(x => <CatalogTemplate key={x._id} game={x}/>) : <h3 className="no-articles">No articles yet</h3>}

        </section>
    );
}