export default function MarketItem({
    item
}) {
    return (
        <div className="item">
            <img src="./images/tablet.png" alt="example1" />
            <h3 className="model">{item.title}</h3>
            <div className="item-info">
                <p className="price">Price: €1000</p>
                <p className="availability">
                    {item.category}
                </p>
                <p className="type">Type: Premium Tech</p>
            </div>
            <a className="details-btn" href="#">Uncover More</a>
        </div>
    );
}