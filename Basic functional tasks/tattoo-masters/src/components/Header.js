import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link id="logo" to="/"><img id="logo-img" src="/images/logo.png" alt="logo" /></Link>
      <nav>
        <Link to="/collection">Collection</Link>

        <div className="user">
          <Link to="/create">Add Tattoo</Link>
          <Link id="logout" to="/logout">Logout</Link>
        </div>

        <div className="guest">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
}