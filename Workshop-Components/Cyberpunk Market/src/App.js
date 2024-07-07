import { useState } from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import Create from './components/Create';
import Login from './components/Login';
import Market from './components/Market/Market';
import Register from './components/Register';
import Error from './components/Error';


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

        {router[page] || <Error />}
      </main>
    </div>
  );
}

export default App;
