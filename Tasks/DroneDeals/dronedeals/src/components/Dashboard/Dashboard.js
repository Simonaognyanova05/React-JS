import { useEffect, useState } from "react";
import DroneItem from "./DroneItem";
import { getDrones } from "../../services/getDrones";

export default function Dashboard() {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        getDrones()
            .then(res => {
                setDrones(res);
            })
    }, [drones])
    return (
        <>
            <h3 class="heading">Marketplace</h3>
            {
                drones.length > 0
                    ? <section id="dashboard">
                        {
                            drones.map(x => <DroneItem key={x._id} drone={x} />)
                        }
                    </section> : <h3 class="no-drones">No Drones Available</h3>
            }
        </>
    );
}