import { Provider, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Catalog from "./components/Catalog";

function App() {
  let [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: '',
  });

  const onLogin = (authData) => {
    setUser(authData);
  };
  
  return (
    <AuthContext.Provider value={{user, onLogin}}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
