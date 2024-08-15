import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="/images/logo2.png" alt="logo" /></Link>
            <nav>
                <div>
                    <Link to="/solutions">Solutions</Link>
                </div>

                <div class="user">
                    <Link to="/create">Add Solution</Link>
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