import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
    let { user } = useContext(AuthContext);

    const guestUser = (
        <div class="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );

    const loggedUser = (
        <div class="user">
            <Link to="/create">Add Event</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );

    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="./images/logo.png" alt="" /></Link>

            <nav>
                <div>
                    <Link to="/dashboard">Events</Link>
                </div>

                {
                    user._id
                        ? loggedUser
                        : guestUser
                }
            </nav>
        </header>
    );
}