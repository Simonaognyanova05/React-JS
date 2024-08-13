export default function Collection() {
    return (
        <>
            <h2>Collection</h2>
            <section id="tattoos">
                <div className="tattoo">
                    <img src="./images/mad bunny.png" alt="example1" />
                    <div className="tattoo-info">
                        <h3 className="type">The Mad Bunny</h3>
                        <span>Uploaded by </span>
                        <p className="user-type">Tattoo Artist</p>
                        <a className="details-btn" href="#">Learn More</a>
                    </div>
                </div>
                <div className="tattoo">
                    <img src="./images/japanese dragon.png" alt="example2" />
                    <div className="tattoo-info">
                        <h3 className="type">Japanese Dragon</h3>
                        <span>Uploaded by </span>
                        <p className="user-type">Tattoo Enthusiast</p>
                        <a className="details-btn" href="#">Learn More</a>
                    </div>
                </div>
                <div className="tattoo">
                    <img src="./images/trash polka.png" alt="example3" />
                    <div className="tattoo-info">
                        <h3 className="type">Trash Polka</h3>
                        <span>Uploaded by </span>
                        <p className="user-type">First Time in Tattoo</p>
                        <a className="details-btn" href="#">Learn More</a>
                    </div>
                </div>
            </section>
            <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
        </>
    );
}