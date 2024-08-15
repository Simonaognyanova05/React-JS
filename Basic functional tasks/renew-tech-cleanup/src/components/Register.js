import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { register } from "../services/register";

export default function Register() {
    const navigate = useNavigate();
    const { onRegister } = useAuth();


    const registerHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password, rePassword } = Object.fromEntries(formData);

        let result = await register(email, password);

        if (password.length < 6) {
            alert('Password must be minimum 6 symbols!');
            return;
        };

        if (password !== rePassword) {
            alert('Passwords do not match!');
            return;
        };

        if(result.status === 409){
            alert('User already existed!');
            return;
        }
        if (result.status === 200) {
            let data = await result.json();
            onRegister(data);
            navigate('/');
        }
    }
    return (
        <section id="register">
            <div className="form">
                <img className="border" src="./images/border.png" alt="" />
                <h2>Register</h2>
                <form className="register-form" onSubmit={registerHandler}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="rePassword" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">register</button>
                    <p className="message">Already registered? <a href="/login">Login</a></p>
                </form>
            </div>
        </section>
    );
}