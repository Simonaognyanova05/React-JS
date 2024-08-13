export default function Header(){
    return (
        <header>
          <a id="logo" href="#"><img id="logo-img" src="./images/logo.png" alt="logo" /></a>
          <nav>
            <a href="#">Collection</a>

            <div className="user">
              <a href="#">Add Tattoo</a>
              <a id="logout" href="#">Logout</a>
            </div>

            <div className="guest">
              <a href="#">Login</a>
              <a href="#">Register</a>
            </div>
          </nav>
        </header>
    );
}