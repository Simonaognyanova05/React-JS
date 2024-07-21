import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { isAuthenticated, state } = useAuth();

        return isAuthenticated
            ? <Component {...props} user={state}/>
            : <Navigate to='/login' />
    }

    return WrapperComponent;
}