import { useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Counter() {
    let count = useContext(AuthContext);
    useEffect(() => {

        return (() => {
            console.log('unmount');
        })
    }, [])
    return (
        <p>{count}</p>
    )
}