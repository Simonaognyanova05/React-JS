export default function GameCard({
    game
}) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={game.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{game.category}</h5>
                    <p className="card-text">{game.title}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}