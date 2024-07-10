import { useEffect, useState } from 'react';
import { getAllGames } from '../../services/getAllGames';
import GameCard from './GameCard';

export default function Catalog() {
    let [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames()
            .then(result => {
                setGames(result);
            })
    }, [])

    return (
        <>
            {games.length > 0
                ? games.map(x => (
                    <GameCard key={x._id} game={x}/>
                ))
                : <p>No games yet</p>
            }
        </>
    )

}