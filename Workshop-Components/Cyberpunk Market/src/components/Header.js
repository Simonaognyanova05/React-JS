export default function Header({
    headerHandler
}) {

    const changePage = (e) => {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);

            headerHandler(url.pathname);
        }
    }
    return (
        <header onClick={changePage}>
            <a id="logo" href="/">
                <img id="logo" src="./images/logo.png" alt="img" /></a>
            <nav>
                <div>
                    <a href="/market">Market</a>
                </div>

                <div className="user">
                    <a href="/sell">Sell</a>
                    <a href="/logout">Logout</a>
                </div>

                <div className="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}