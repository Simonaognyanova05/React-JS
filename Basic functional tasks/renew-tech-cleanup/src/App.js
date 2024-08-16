import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from "./components/Header";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/Footer";
import Logout from './components/Logout';
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
              <Route path='/details/:solutionId' element={<Details />} />
              <Route path='/edit/:solutionId' element={<Edit />} />
              <Route path='/delete/:solutionId' element={<Delete />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
              <Route path='/solutions' element={<Solutions />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
