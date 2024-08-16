import { useState, useEffect } from 'react';
import { getSolutions } from '../../services/getSolutions';
import SolutionCard from './SolutionCard';

export default function Solutions() {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        getSolutions()
            .then(result => {
                return result.json();
            })
            .then(res => {
                setSolutions(res);
            })
    }, []);

    return (
        <>
            <h2>Solutions</h2>
            <section id="solutions">
                {
                    solutions.length > 0
                        ? solutions.map(x => <SolutionCard solution={x} />)
                        : <h2 id="no-solution">No Solutions Added.</h2>
                }
            </section>

        </>
    );
}