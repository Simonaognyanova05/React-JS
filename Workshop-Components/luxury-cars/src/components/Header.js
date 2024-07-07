export default function Header({
    headerHandler
}) {
    const clickHeader = (e) => {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);

            headerHandler(url.pathname);
        }
    }
    return (
        <header onClick={clickHeader}>
            <a id="logo" href="/"><img id="logo-car" src="./images/car-logo.png" alt="img" /></a>
            <nav>
                <div>
                    <a href="/catalog">Our Cars</a>
                    <a href="/search">Search</a>
                </div>

                <div class="user">
                    <a href="/create">Add Your Car</a>
                    <a href="/logout">Logout</a>
                </div>

                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    )
}