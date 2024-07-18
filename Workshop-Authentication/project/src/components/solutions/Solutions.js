import { useEffect, useState } from "react";
import { getAll } from "../../services/getAll";
import SolutionCard from "./SolutionCard";
export default function Solutions() {
    let [solutionState, setSolution] = useState([]);

    useEffect(() => {

        getAll()
            .then(res => {
                console.log(res);
                setSolution(res);
            })
    }, []);

    return (
        <>
            <h2>Solutions</h2>
            <section id="solutions">
                {solutionState.map(x => (
                    <SolutionCard value={x}/>
                ))}
            </section>
            <h2 id="no-solution">No Solutions Added.</h2>
        </>
    );
}