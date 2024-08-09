import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export default function Header() {

    const { user } = useAuth();
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>

            {
                Boolean(user.email)
                    ? <li><Link to='/logout'>Logout</Link></li>
                    : <li><Link to='/login'>Login</Link></li>
            }


        </ul>
    );
}