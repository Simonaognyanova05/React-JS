export default function Catalog() {
    return (
        <section id="catalogPage">
            <h1>All Albums</h1>

            <div className="card-box">
                <img src="./images/Lorde.jpg" />
                <div>
                    <div className="text-center">
                        <p className="name">Name: Melodrama</p>
                        <p className="artist">Artist: Lorde</p>
                        <p className="genre">Genre: Pop Music</p>
                        <p className="price">Price: $7.33</p>
                        <p className="date">Release Date: June 16, 2017</p>
                    </div>
                    <div className="btn-group">
                        <a href="#" id="details">Details</a>
                    </div>
                </div>
            </div>
            <p>No Albums in Catalog!</p>
        </section>
    );
}