import React from 'react';

export default function Main() {
    let textState = React.useState('');

    let [text, setText] = textState;

    const addText = (e) => {
        setText(e.target.value);
    }
    return (
        <main>
            <p>Text - {text}</p>
            <input type="text" onChange={addText} />
        </main>
    );
}