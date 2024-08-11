import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <img src="./images/headphones.png" />
                <Link to="/">Home</Link>
                <ul>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/create">Create Album</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
}