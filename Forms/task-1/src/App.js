import { useState } from "react";

function App() {

  let [valid, setValid] = useState(false);

  const getFormData = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get('username');
    let password = formData.get('password');

    if (username.length < 3) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  return (
    <>
      <form onSubmit={getFormData}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <p>{valid ? 'Username is valid' : 'Username is invalid'}</p>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" name="Submit" value="Login" />
      </form>
    </>
  );
}

export default App;
