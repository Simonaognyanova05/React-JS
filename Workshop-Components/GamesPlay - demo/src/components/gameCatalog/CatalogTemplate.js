export default function CatalogTemplate({
    game,
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
            </div>
        </div>
    );
}