import { Link } from "react-router-dom";

export default function Header() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/contacts">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
        </ul>
    )
}