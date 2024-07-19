import { Routes, Route, Provider } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Header from "./components/Header";
import Create from "./components/Create";
import Dashboard from "./components/events/Dashboard";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from './components/Logout';
import Footer from "./components/Footer";


const initialState = {
  _id: '',
  email: '',
  accessToken: ''
};


function App() {
  let [user, setUser] = useState(initialState);

  const onLogin = (authData) => {
    setUser(authData);
  }
  const onRegister = (authData) => {
    setUser(authData);
  }
  const onLogout = () => {
    setUser(initialState);
  }


  return (
    <>
      <AuthContext.Provider value={{ user, onLogin, onRegister, onLogout }}>
        <div id="wrapper">
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/details' element={<Details />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
