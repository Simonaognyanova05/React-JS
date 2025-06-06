import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Dashboard from './components/Dashboard/Dashboard';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from "./components/Header";
import Logout from './components/Logout';
import Delete from './components/Delete';

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
            <Route path='/data/edit/:droneId' element={<Edit />} />
            <Route path='/data/delete/:droneId' element={<Delete />} />
            <Route path='/data/drones/:droneId' element={<Details />} />
            <Route path='/create' element={<Create />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
