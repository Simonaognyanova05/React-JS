import { useState, useEffect } from 'react';

function App() {
  let [username, setUsername] = useState('Pesho');
  let [isValid, setIsValid] = useState(false);
  let [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/services')
      .then(res => res.json())
      .then(res => {
        setServices(Object.values(res));
      })
  }, [])
  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get('username');
    let password = formData.get('password');


    console.log(username);
    console.log(password);
  };


  const changeName = (e) => {
    setUsername(e.target.value)
    if (username.length < 3) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    console.log(username);
  }

  const onServiceChange = (e) => {
    setUsername('');
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username} onChange={changeName} />
          {isValid ? '' : <span>The input is invalid!</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" defaultValue="123" />
        </div>

        <div>
          <label htmlFor="rememberMe">Remember Me</label>
          <select name='services' id='services' onChange={onServiceChange}>
            {services.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="rememberMe">Remember Me</label>
          <input type="checkbox" name="rememberMe" id="rememberMe" defaultChecked />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
