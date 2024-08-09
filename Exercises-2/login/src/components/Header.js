import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
        </ul>
    );
}