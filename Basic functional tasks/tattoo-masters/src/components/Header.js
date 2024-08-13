import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user } = useAuth();

  const guestHeader = (
    <div className="guest">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );

  const userHeader = (
    <div className="user">
      <Link to="/create">Add Tattoo</Link>
      <Link id="logout" to="/logout">Logout</Link>
    </div>
  );
  return (
    <header>
      <Link id="logo" to="/"><img id="logo-img" src="/images/logo.png" alt="logo" /></Link>
      <nav>
        <Link to="/collection">Collection</Link>

        {
          Boolean(user._id)
            ? userHeader
            : guestHeader
        }
      </nav>
    </header>
  );
}