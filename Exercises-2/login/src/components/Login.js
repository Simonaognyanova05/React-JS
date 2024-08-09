import { useNavigate } from 'react-router-dom';
import { login } from '../services/login';

export default function Login() {
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        let res = await login(email, password);

        if (res.status == 200) {
            navigate('/');
        } else {
            console.log('Incorrect data!');
        }
    }
    return (
        <form onSubmit={loginHandler}>
            <input type="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" name="Login" />
        </form>
    );
}