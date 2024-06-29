import React from 'react';
import Counter from './items/Counter';

export default function Main() {
    let countState = React.useState(0);

    let [count, setCount] = countState;

    return (
        <main>
            <Counter>{count}</Counter>
            <button onClick={() => setCount(count + 1)}>+</button>
        </main>
    );
}