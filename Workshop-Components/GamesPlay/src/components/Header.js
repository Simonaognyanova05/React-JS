export default function Header({
    navigationChange
}) {

    const clickHeader = (e) => {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);
            navigationChange(url.pathname)
        }
    }

    return (
        <header onClick={clickHeader}>
            <h1><a className="home" href="#">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                <div id="user">
                    <a href="/create-game">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>

                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}