import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-car" src="./images/car-logo.png" alt="img" /></Link>
            <nav>
                <div>
                    <Link to="/catalog">Our Cars</Link>
                    <Link to="/search">Search</Link>
                </div>

                <div class="user">
                    <Link to="/create">Add Your Car</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                <div class="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>

    );
}