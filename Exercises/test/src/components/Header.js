import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {

    const { user } = useAuth();

    const userHeader = (
        <div className="user">
            <Link to="/create">Add Fruit</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
    const guestHeader = (
        <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

        </div>
    )
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="./images/logo.png" alt="" /></Link>

            <nav>
                <div>
                    <Link to="/dashboard">Fruits</Link>
                </div>

                {
                    Boolean(user._id)
                        ? userHeader
                        : guestHeader
                }
            </nav>
        </header>
    );
}