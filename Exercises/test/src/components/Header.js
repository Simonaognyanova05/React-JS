export default function Header() {
    return (
        <header>
            <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

            <nav>
                <div>
                    <a href="#">Fruits</a>
                    <a href="#">Search</a>
                </div>

                <div className="user">
                    <a href="#">Add Fruit</a>
                    <a href="#">Logout</a>
                </div>

                <div className="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>

                </div>
            </nav>
        </header>
    );
}