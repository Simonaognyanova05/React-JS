import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  return (
    <div id="box">

      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details' element={<Details />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
