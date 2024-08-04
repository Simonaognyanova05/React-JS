import { Routes, Route } from "react-router-dom";
import Cats from "./components/Cats";
import Home from "./components/Home";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/create" element={<Create />} />


      </Routes>
    </>
  );
}

export default App;
