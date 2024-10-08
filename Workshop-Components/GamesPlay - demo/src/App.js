import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/latestGames/WelcomeWorld";
import CatalogPage from './components/gameCatalog/CatalogPage';
import CreatePage from "./components/CreatePage";
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/Error';

function App() {
  let [page, setPage] = useState('/');

  const navigationChange = (path) => {
    setPage(path);
  }
  const routes = {
    '/': <WelcomeWorld />,
    '/create-game': <CreatePage />,
    '/catalog': <CatalogPage />,
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
