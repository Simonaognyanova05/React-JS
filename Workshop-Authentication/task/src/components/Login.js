export default function Login() {
    return (
        <form>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" name="Login" />

        </form>
    );
}