import Cats from "./components/Cats";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cats" element={<Cats/>}/>

    </Routes>
    </>
  );
}

export default App;
