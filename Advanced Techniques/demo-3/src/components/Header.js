import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="./images/logo.png" alt="" /></Link>

            <nav>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                <div className="user">
                    <Link to="/create">Add Album</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}