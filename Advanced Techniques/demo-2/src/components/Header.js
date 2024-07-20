import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export default function Header() {
    let { state } = useAuth();
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/catalog'>Catalog</Link></li>
            </ul>
            <p>{state.email}</p>
        </nav>
    );
}