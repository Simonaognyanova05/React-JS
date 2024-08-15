import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { user } = useAuth();

    const guestResult = (
        <div class="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );

    const userResult = (
        <div class="user">
            <Link to="/create">Add Solution</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="/images/logo2.png" alt="logo" /></Link>
            <nav>
                <div>
                    <Link to="/solutions">Solutions</Link>
                </div>

                {
                    Boolean(user._id)
                    ? userResult
                    : guestResult 
                }
            </nav>
        </header>
    );
}