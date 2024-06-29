import React from 'react';

export default function Main() {
    let nameState = React.useState('');

    let [name, setName] = nameState;
    let color = 'black';

    if (name == 'Simona') {
        color = 'green';
    }
    const addName = (e) => {
        setName(e.target.value);
    }

    return (
        <main>
            <p style={{ color }}>Name - {name ? name : 'No name'}</p>
            <input type='text' onBlur={addName} />
        </main>
    );
}