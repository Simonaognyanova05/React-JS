import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {

    const { user } = useAuth();

    const guestResult = (
        <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

        </div>
    );

    const userResult = (
        <div className="user">
            <Link to="/create">Add Motorcycle</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="./images/logo.png" alt="" /></Link>

            <nav>
                <div>
                    <Link to="/dashboard">Motorcycles</Link>
                </div>

                {Boolean(user.email)
                    ? <div className="user">
                        <Link to="/create">Add Motorcycle</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div className="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>

                    </div>
                }

            </nav>
        </header>
    );
}