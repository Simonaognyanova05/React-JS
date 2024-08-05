import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Create from "./components/Create";
import Cars from "./components/Cars";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/create" element={<Create/>} />

      </Routes>
    </>
  );
}

export default App;
