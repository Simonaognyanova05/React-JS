import { useState, Provider } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from './components/Home';
import Logout from './components/Logout';

function App() {
  let [user, setUser] = useState({
    accessToken: '',
    email: '',
    _id: ''
  });


  const onLogin = (authData) => {
    setUser(authData);
  };

  return (
    <AuthContext.Provider value={{ user, onLogin }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />

        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
