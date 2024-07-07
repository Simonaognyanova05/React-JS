import { useState, useEffect } from 'react';
import LatestGames from "./LatestGames";
import { getLatestGames } from '../../services/getLatestGames'

export default function Home() {
    let [games, setGames] = useState([]);

    useEffect(() => {
        getLatestGames()
            .then(result => setGames(result));
    }, [])
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.length > 0
                    ? games.map(x => <LatestGames key={x._id} game={x}/>)
                    : <p className="no-articles">No games yet</p>
                }



            </div>
        </section>
    );
}