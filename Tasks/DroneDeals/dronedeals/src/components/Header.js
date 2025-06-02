import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { user } = useAuth();
    const userId = user._id;

    const loggedUser = (
        <div class="user">
            <Link to="/dashboard">Sell</Link>
            <Link to="/create">Create</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );

    const unloggedUser = (
        <div class="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );


    return (
        <header>

            <Link id="logo" to="/"><img id="logo" src="./images/logo2.png" alt="img" /></Link>
            <nav>
                <div>
                    <Link to="/">Marketplace</Link>
                </div>

                {userId ? loggedUser : unloggedUser}
            </nav>
        </header>
    );
}