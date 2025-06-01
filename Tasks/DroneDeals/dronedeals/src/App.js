import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Header />

        <main id="main-element">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/details' element={<Details />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
