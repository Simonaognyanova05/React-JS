import { useEffect, useState } from 'react';
import CatalogTemplate from './CatalogTemplate';

export default function CatalogPage() {

    let [ games, setGames ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
        .then(res => res.json())
        .then(gamesResult => {
            setGames(gamesResult);
            console.log(gamesResult);
        })
    })
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games ? games.map(x => <CatalogTemplate game={x}/>) : <h3 className="no-articles">No articles yet</h3>}


           
        </section>
    );
}