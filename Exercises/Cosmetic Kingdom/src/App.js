import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from "./components/Header";
import Home from './components/Home';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { Logout } from './components/Logout';
import Delete from './components/Delete';


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
              <Route path='/details/:productId' element={<Details />} />
              <Route path='/edit/:productId' element={<Edit />} />
              <Route path='/delete/:productId' element={<Delete />} />

              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />

            </Routes>
          </main>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
