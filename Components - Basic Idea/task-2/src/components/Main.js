import React from 'react';

function showData() {
    return (
        <p>The button is clicked!</p>
    );
};

export default function Main() {
    const [show, setShow] = React.useState(false);

    const clickedButton = () => {
        setShow(true);
    }
    return (
        <main>
            <button onClick={clickedButton}>Show paragraph!</button>
            {show && showData()}
        </main>
    );

}