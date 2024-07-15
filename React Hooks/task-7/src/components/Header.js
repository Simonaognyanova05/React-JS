import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/people">People</Link></li>

        </ul>
    );
}