import { useState } from 'react';

function App() {
  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get('username');
    let password = formData.get('password');


    console.log(username);
    console.log(password);
  };

  let [isValid, setIsValid] = useState(false);

  const changeName = (e) => {
    let changeName = e.target.value;

    if (changeName.length < 3) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" defaultValue="Pesho" onChange={changeName} />
          {isValid ? '' : <span>The input is invalid!</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" defaultValue="123" />
        </div>

        <div>
          <label htmlFor="isAdmin">Is Admin</label>
          <input type="checkbox" name="isAdmin" id="isAdmin" defaultChecked />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
