import { Link, NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {
    let activeStyle = {
        backgroundColor: 'orange',
        fontSize: '25px'
    }
    return (
        <ul>
            <li><NavLink activeStyle={activeStyle} to="/catalog">Catalog</NavLink></li>
            <li><NavLink activeStyle={{textDecoration: 'none'}} to="/about">About Us</NavLink></li>
            <li><NavLink activeClassName='test' to="/contact">Contact Us</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/logout">Logout</NavLink></li>
        </ul>
    );
}