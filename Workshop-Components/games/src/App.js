import { useState } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from './components/catalog/Catalog';
import CreateGame from './components/CreateGame';
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/Error';

function App() {
  let [page, setPage] = useState('/');

  const navigationChange = (path) => {
    setPage(path);
  }

  const routes = {
    '/': <Home />,
    '/create-game': <CreateGame />,
    '/catalog': <Catalog />,
    '/login': <Login />,
    '/register': <Register />
  }

  return (
    <div id="box">

      <Header navigationChange={navigationChange} />

      <main id="main-content">
        {routes[page] || <Error />}
      </main>
    </div>
  );
}

export default App;
