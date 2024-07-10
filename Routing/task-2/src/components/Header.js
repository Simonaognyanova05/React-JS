import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <ul>
            <li><NavLink activeStyle={{color: "black", textDecoration: "none"}} to="/">Home</NavLink></li>
            <li><NavLink activeStyle={{color: "black", textDecoration: "none"}} to="/catalog">Catalog</NavLink></li>
            <li><NavLink activeStyle={{color: "black", textDecoration: "none"}} to="/contacts">Contact Us</NavLink></li>
            <li><NavLink activeStyle={{color: "black", textDecoration: "none"}} to="/about">About Us</NavLink></li>
            <li><NavLink activeStyle={{color: "black", textDecoration: "none"}} to="/logout">Log out</NavLink></li>
        </ul>
    )
}