import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from './components/Home';

function App() {
  let [user, setUser] = useState({
    accessToken: '',
    email: '',
    _id: ''
  });


  const onLogin = (authData) => {
    setUser(authData);
  }
  return (
    <div className="App">
      <Header {...user} />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Login' element={<Login onLogin={onLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
