import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home';
import Catalog from './components/Catalog';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';

function App() {
  return (
    <div id="wrapper">
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/catalog" exact component={Catalog} />
      <Route path="/search" exact component={Search} />
      <Route path="/create" exact component={Create} />
      <Route path="/logout" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/details" exact component={Details} />
      <Route path="/edit" exact component={Edit} />

    </div>
  );
}

export default App;
