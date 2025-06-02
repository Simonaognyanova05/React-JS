import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { register } from '../services/register';

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();

    const registerHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            throw 'Passwords do not match!'
        };

        register(email, password)
            .then(result => {
                onRegister(result);
                navigate('/');
            });

    }
    return (
        <section id="register">
            <div class="form">
                <h2>Register</h2>
                <form class="register-form" onSubmit={registerHandler}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="rePassword" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p class="message">Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
}