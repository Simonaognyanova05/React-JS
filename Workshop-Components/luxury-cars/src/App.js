import { useState } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from './components/Catalog';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import Error from './components/Error';

function App() {
  let [page, setPage] = useState('/');

  const headerHandler = (path) => {
    setPage(path);
  }

  const router = {
    '/': <Home />,
    '/catalog': <Catalog />,
    '/search': <Search />,
    '/create': <Create />,
    '/login': <Login />,
    '/register': <Register />
  }
  return (
    <div id="wrapper">
      <Header headerHandler={headerHandler} />

      <main id="main-element">
        {router[page] || <Error />}
      </main>
    </div>
  );
}

export default App;
