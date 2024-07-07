import { useState } from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import Create from './components/Create';
import Login from './components/Login';
import Market from './components/Market';
import Register from './components/Register';


function App() {
  const [page, setPage] = useState('/');

  const headerHandler = (path) => {
    setPage(path);
  }
  const router = {
    '/': <Home />,
    '/market': <Market />,
    '/sell': <Create />,
    '/login': <Login />,
    '/register': <Register />
  }
  return (
    <div id="wrapper">
      <Header headerHandler={headerHandler} />

      <main id="main-element">

        {router[page] || <p>Page not found!</p>}
      </main>
    </div>
  );
}

export default App;
