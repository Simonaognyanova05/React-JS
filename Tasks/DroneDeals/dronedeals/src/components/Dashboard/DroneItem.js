import {Link} from 'react-router-dom';

export default function DroneItem({drone}) {
    return (
        <div class="drone">
            <img src={drone.imageUrl} alt="example1" />
            <h3 class="model">{drone.model}</h3>
            <div class="drone-info">
                <p class="price">Price: €{drone.price}</p>
                <p class="condition">Condition: {drone.condition}</p>
                <p class="weight">Weight: {drone.weight}g</p>
            </div>
            <Link class="details-btn" to={`/data/drones/${drone._id}`}>Details</Link>
        </div>
    );
}