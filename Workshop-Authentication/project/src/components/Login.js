import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../services/login";

export default function Login() {
    let navigate = useNavigate();

    let [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: ''
    });


    const loginHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        let user = await login(email, password);

        if(user){
            setUser(user);
            navigate('/');
        }
    }

    return (
        <section id="login">
            <div className="form">
                <img className="border" src="./images/border.png" alt="" />
                <h2>Login</h2>
                <form className="login-form" onSubmit={loginHandler}>
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">login</button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </section>
    );
}