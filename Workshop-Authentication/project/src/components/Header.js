import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export default function Header() {
    let { user } = useContext(AuthContext);

    const userHeader = (
        <div className="user">
            <Link to="/create">Add Solution</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );

    const guestHeader = (
        <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    )
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="/images/logo2.png" alt="logo" /></Link>
            <nav>
                <div>
                    <Link to="/solutions">Solutions</Link>
                </div>

                {user._id !== ''
                    ? userHeader
                    : guestHeader
                }
            </nav>
        </header>
    );
}