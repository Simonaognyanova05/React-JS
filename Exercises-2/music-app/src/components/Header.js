import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {

    const { user } = useAuth();
    return (
        <header>
            <nav>
                <img src="./images/headphones.png" />
                <Link to="/">Home</Link>
                <ul>
                    {
                        Boolean(user._id)
                            ?
                            <>
                                <li><Link to="/catalog">Catalog</Link></li>
                                <li><Link to="/create">Create Album</Link></li>
                                <li><Link to="/logout">Logout</Link></li></>
                            :
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                    }


                </ul>
            </nav>
        </header>
    );
}