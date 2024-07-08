import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>

        </ul>
    );
}