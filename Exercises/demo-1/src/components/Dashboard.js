export default function Dashboard() {
    return (
        <>
            <h2>Products</h2>
            <section id="dashboard">
                <div className="product">
                    <img src="./images/product example 1.png" alt="example1" />
                    <p className="title">Fond De Teint</p>
                    <p><strong>Price:</strong><span className="price">23.99</span>$</p>
                    <a className="details-btn" href="">Details</a>
                </div>
                <div className="product">
                    <img src="./images/product example 2.png" alt="example1" />
                    <p className="title">Eyeshadow Palette</p>
                    <p><strong>Price:</strong><span className="price">19.99</span>$</p>
                    <a className="details-btn" href="">Details</a>
                </div>
                <div className="product">
                    <img src="./images/product example 3.png" alt="example1" />
                    <p className="title">Lipstick</p>
                    <p><strong>Price:</strong><span className="price">16.99 </span>$</p>
                    <a className="details-btn" href="">Details</a>
                </div>
            </section>
            <h2>No products yet.</h2>
        </>
    );
}