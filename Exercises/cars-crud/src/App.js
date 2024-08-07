import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Create from "./components/Create";
import Remove from "./components/Remove";
import Update from "./components/Update";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/create" element={<Create />} />
        <Route path="/remove" element={<Remove />} />
        <Route path="/update" element={<Update />} />

      </Routes>
    </>
  );
}

export default App;
