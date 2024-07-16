import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>

                {user.email
                    ?
                    <>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <p>{user.email}</p>
                    </>
                    : <li><Link to="/login">Login</Link></li>}

            </ul>
        </nav>
    );
}