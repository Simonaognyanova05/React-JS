import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
