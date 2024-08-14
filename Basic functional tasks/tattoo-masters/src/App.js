import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Collection from './components/Collection/Collection';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AuthProvider>
        <div id="content">
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/collection' element={<Collection />} />
              <Route path='/create' element={<Create />} />
              <Route path='/details/:tattooId' element={<Details />} />
              <Route path='/edit/:tattooId' element={<Edit />} />
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
