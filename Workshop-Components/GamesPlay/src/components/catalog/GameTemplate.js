export default function GameTemplate({
    game
}) {
    return (
        <div class="allGames">
            <div class="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
            </div>
        </div>
    );
}