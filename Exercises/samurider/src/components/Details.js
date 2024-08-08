export default function Details() {
    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src="./images/Honda Hornet.png" alt="example1" />
                <p id="details-title">Honda Hornet</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p className="year">Year: 2006</p>
                        <p className="mileage">Mileage: 45000 km.</p>
                        <p className="contact">Contact Number: 0881234567</p>
                        <p id="motorcycle-description">
                            The Honda Hornet 2006 is a popular naked street bike known for its sporty design and powerful performance.
                            It features a 599cc inline-four engine, delivering a thrilling riding experience with its responsive acceleration and agile handling.
                        </p>
                    </div>

                    <div id="action-buttons">
                        <a href="" id="edit-btn">Edit</a>
                        <a href="" id="delete-btn">Delete</a>
                    </div>
                </div>
            </div>
        </section>
    );
}