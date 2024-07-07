export default function Header() {
    return (<header>
        <a id="logo" href="#"><img id="logo-car" src="./images/car-logo.png" alt="img" /></a>
        <nav>
            <div>
                <a href="#">Our Cars</a>
                <a href="#">Search</a>
            </div>

            <div class="user">
                <a href="#">Add Your Car</a>
                <a href="#">Logout</a>
            </div>

            <div class="guest">
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
        </nav>
    </header>)
}