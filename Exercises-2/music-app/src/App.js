import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Catalog from './components/Catalog/Catalog';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Logout from './components/Logout';
import Delete from './components/Delete';

function App() {
  return (
    <AuthProvider>
      <div id="box">

        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:albumId' element={<Details />} />
            <Route path='/edit/:albumId' element={<Edit />} />
            <Route path='/delete/:albumId' element={<Delete />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
