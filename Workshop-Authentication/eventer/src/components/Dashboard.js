export default function Dashboard() {
    return (
        <>
            <h2>Current Events</h2>
            <section id="dashboard">
                <div className="event">
                    <img src="./images/large_deniroparty_marquee.jpg" alt="example1" />
                    <p className="title">
                        Robert De Niro Themed Party
                    </p>
                    <p className="date">15.04.2023 from 17:00</p>
                    <a className="details-btn" href="">Details</a>
                </div>
                <div className="event">
                    <img src="./images/pexels-run-ffwpu-2530130 (1).jpg" alt="example1" />
                    <p className="title">
                        Fun Run
                    </p>
                    <p className="date">19.04.2023 from 13:00</p>
                    <a className="details-btn" href="">Details</a>
                </div><div className="event">
                    <img src="./images/pexels-victoria-akvarel-4873622.jpg" alt="example1" />
                    <p className="title">
                        Art & Wine
                    </p>
                    <p className="date">17.04.2023 from 18:00</p>
                    <a className="details-btn" href="">Details</a>
                </div>
            </section>
            <h4>No Events yet.</h4>
        </>
    );
}