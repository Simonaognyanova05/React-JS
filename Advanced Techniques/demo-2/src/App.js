import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Catalog from "./components/Catalog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
