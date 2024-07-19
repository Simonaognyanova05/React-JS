export default function Home() {
    return (
        <section id="home">
            <div className="home-intro">
                <h1 className="fancy">Welcome to our community-driven events website! We believe that the best events
                    come from the community.</h1>

                <p>So why wait? Join our community today and start
                    discovering and sharing the best events in your area!</p>
                <a className="event-btn" href="#">To Events</a>
            </div>
            <img className="party-img" src="./images/party people.png" alt="event" />
        </section>
    );
}