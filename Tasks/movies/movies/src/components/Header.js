import { Link } from 'react-router-dom';

export default function Header() {
    return (<ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/create'>Create</Link></li>
    </ul>)
}