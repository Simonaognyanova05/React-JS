export default function Header() {
    return (
        <header>
            <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>

            <nav>
                <div>
                    <a href="#">Products</a>
                </div>

                <div class="user">
                    <a href="#">Add Product</a>
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