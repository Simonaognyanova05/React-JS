import {Link} from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";


export default function Header(){
    let {state} = useContext(AuthContext)
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/catalog'>Catalog</Link></li>
            </ul>
            <p>{state.email}</p>
        </nav>
    );
}