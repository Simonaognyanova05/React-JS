import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:movieId" element={<Delete />} />
        <Route path="/update/:movieId" element={<Update />} />


      </Routes>
    </div>
  );
}

export default App;
