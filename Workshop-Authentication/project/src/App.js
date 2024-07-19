import { useState, useEffect, Provider } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Solutions from "./components/solutions/Solutions";
import Logout from "./components/Logout";
import Delete from "./components/Delete";
import Footer from "./components/Footer";

function App() {
  let [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: ''
  });

  const onLogin = (authData) => {
    setUser(authData);
  };

  const onRegister = (authData) => {
    setUser(authData)
  }


  return (
    <AuthContext.Provider value={{ user, onLogin, onRegister }}>
      <>
        <div id="wrapper">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/details/:solutionId" element={<Details />} />
              <Route path="/edit/:solutionId" element={<Edit />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/delete" element={<Delete />} />


            </Routes>
          </main>
        </div>
        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
