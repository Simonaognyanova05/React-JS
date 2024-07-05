import { useState } from 'react';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CreatePage from "./components/CreatePage";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  let [page, setPage] = useState('/');

  const routes = {
    '/': <WelcomeWorld />,
    '/create-game': <CreatePage />,
    '/login': <Login />,
    '/register': <Register />
  }

  const navigationChange = (path) => {
    setPage(path);
  }

  return (
    <div id="box">
      <Header navigationChange={navigationChange} />

      <main id="main-content">
        {routes[page] || <h2>No page found!</h2>}
      </main>
    </div>
  );
}

export default App;
