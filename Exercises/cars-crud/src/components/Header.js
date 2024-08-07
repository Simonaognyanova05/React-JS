import { Link } from "react-router-dom";

export default function Header(){
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cars'>Cars</Link></li>
            <li><Link to='/create'>Create</Link></li>
            <li><Link to='/update'>Update</Link></li>
            <li><Link to='/remove'>Delete</Link></li>
        </ul>
    );
}