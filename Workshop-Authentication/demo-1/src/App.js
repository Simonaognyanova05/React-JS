import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
