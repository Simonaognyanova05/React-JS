import EventCard from "./EventCard";
import { getAll } from "../../services/getAll";
import { useEffect, useState } from "react";

export default function Dashboard() {

    let [events, setEvents] = useState([]);

    
    useEffect(() => {
        getAll()
        .then(res => {
            setEvents(res);
        })
    }, [])

    return (
        <>
            <h2>Current Events</h2>
            <section id="dashboard">
                {
                    events.length > 0
                    ? events.map(x => <EventCard key={x._id} value={x} />)
                    : <h4>No Events yet.</h4>
                }
                
            </section>
            
        </>
    );
}