import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { register } from '../services/register';
import { AuthContext } from '../contexts/AuthContext';

export default function Register() {
    let navigate = useNavigate();
    let { onRegister } = useContext(AuthContext);
    const registerHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        let user = await register(email, password);

        if (user) {
            onRegister(user);
            navigate('/');
        }
    }
    return (
        <section id="register">
            <div className="form">
                <img className="border" src="/images/border.png" alt="" />
                <h2>Register</h2>
                <form className="register-form" onSubmit={registerHandler}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p className="message">Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
}