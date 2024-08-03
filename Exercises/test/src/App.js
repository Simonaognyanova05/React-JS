import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Footer from "./components/Footer";
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout';

function App() {
  return (
    <>
      <AuthProvider>
        <div id="wrapper">
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/details/:fruitId' element={<Details />} />
              <Route path='/edit/:fruitId' element={<Edit />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />

            </Routes>
          </main>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
