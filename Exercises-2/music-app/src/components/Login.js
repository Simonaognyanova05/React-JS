import { useNavigate } from 'react-router-dom';
import { login } from '../services/login';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { onLogin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        let result = await login(email, password);

        if (result.status == 401) {
            alert('Incorrect data!');
            return;
        }

        let data = await result.json();
        onLogin(data);
        navigate('/');
    }
    return (
        <section id="loginPage">
            <form onSubmit={loginHandler}>
                <fieldset>
                    <legend>Login</legend>

                    <label htmlFor="email" className="vhide">Email</label>
                    <input id="email" className="email" name="email" type="text" placeholder="Email" />

                    <label htmlFor="password" className="vhide">Password</label>
                    <input id="password" className="password" name="password" type="password" placeholder="Password" />

                    <button type="submit" className="login">Login</button>

                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}