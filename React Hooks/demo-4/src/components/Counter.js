import { useEffect } from 'react';

export default function Counter({
    value
}) {

    useEffect(() => {

        return (() => {
            console.log('unmount');
        })
    }, [])
    return (
        <p>{value}</p>
    )
}