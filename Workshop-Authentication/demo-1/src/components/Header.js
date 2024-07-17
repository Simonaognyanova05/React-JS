import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {

    let { user } = useContext(AuthContext);
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                {user.email
                    ? <>
                        <p>{user.email}</p>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to='/create'>Create</Link></li>
                        <li><Link to='/pets'>All pets</Link></li>
                    </>

                    : <li><Link to='/login'>Login</Link></li>}

            </ul>

        </nav>
    );
}