import { Navigate } from 'react-router-dom';

export default function Logout() {

    return (
        <Navigate path='/login' replace={true} />
    );
}