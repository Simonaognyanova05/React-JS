import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Collection from './components/Collection';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="content">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details' element={<Details />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
