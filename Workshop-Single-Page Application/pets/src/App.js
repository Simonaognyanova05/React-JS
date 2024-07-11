import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import MyBooks from './components/MyBooks';
import Register from './components/Register';
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <Header />

      <main id="site-content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details' element={<Details />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-books' element={<MyBooks />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
