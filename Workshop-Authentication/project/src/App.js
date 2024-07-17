import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details" element={<Details />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/solutions" element={<Solutions />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
