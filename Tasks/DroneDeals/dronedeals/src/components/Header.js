export default function Header() {
    return (
        <header>

            <a id="logo" href="#"><img id="logo" src="./images/logo2.png" alt="img" /></a>
            <nav>
                <div>
                    <a href="#">Marketplace</a>
                </div>

                <div class="user">
                    <a href="#">Sell</a>
                    <a href="#">Logout</a>
                </div>

                <div class="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
}