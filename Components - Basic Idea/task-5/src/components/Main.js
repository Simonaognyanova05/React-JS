import React from 'react';

export default function Main() {
    let [a, setA] = React.useState('');
    let [b, setB] = React.useState('');
    let [result, setResult] = React.useState(null);

    const handleA = (e) => {
        setA(e.target.value);
    }
    const handleB = (e) => {
        setB(e.target.value);
    }

    const sum = () => {
        let value1 = Number(a) || 0;
        let value2 = Number(b) || 0;

        setResult(value1 + value2);
    }

    const subtractions = () => {
        let value1 = Number(a) || 0;
        let value2 = Number(b) || 0;

        if (value1 > value2) {
            setResult(value1 - value2);
        } else {
            setResult(value2 - value1);
        }
    }

    const multiplication = () => {
        let value1 = Number(a) || 0;
        let value2 = Number(b) || 0;

        setResult(value1 * value2);
    }

    const division = () => {
        let value1 = Number(a) || 0;
        let value2 = Number(b) || 0;

        setResult(value1 / value2)
    }
    return (
        <main>
            <input type='text' onChange={handleA} />
            <input type='text' onChange={handleB} />
            <p>Result: {result}</p>
            <button onClick={sum}>Sum</button>
            <button onClick={subtractions}>Subtraction</button>
            <button onClick={multiplication}>Multiplication</button>
            <button onClick={division}>Division</button>

        </main>
    );
}