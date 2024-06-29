import React from 'react';
import showData from './items/showData';

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