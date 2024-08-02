import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function Header() {
    const { user } = useContext(AuthContext);

    const guestHeader = (
        <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );

    const userHeader = (
        <div className="user">
            <Link to="/create">Add Product</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
    return (
        <header>
            <Link id="logo" to="/"><img id="logo-img" src="./images/logo.png" alt="" /></Link>

            <nav>
                <div>
                    <Link to="/dashboard">Products</Link>
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