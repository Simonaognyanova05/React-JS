import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

const initialState = {
  _id: '',
  email: '',
  accessToken: ''
}
function App() {

  const [user, setUser] = useState(initialState);

  const onLogin = (authData) => {
    setUser(authData);
  }

  return (
    <>
      <AuthContext.Provider value={{user, onLogin}}>
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
