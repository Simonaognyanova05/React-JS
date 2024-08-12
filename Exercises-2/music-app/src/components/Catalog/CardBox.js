export default function CardBox({albums}) {
    return (
        <div className="card-box">
            <img src={albums.imgUrl} />
            <div>
                <div className="text-center">
                    <p className="name">Name: {albums.name}</p>
                    <p className="artist">Artist: {albums.artist}</p>
                    <p className="genre">Genre: {albums.genre}</p>
                    <p className="price">Price: ${albums.price}</p>
                    <p className="date">Release Date: {albums.date}</p>
                </div>
                <div className="btn-group">
                    <a href="#" id="details">Details</a>
                </div>
            </div>
        </div>
    );
}