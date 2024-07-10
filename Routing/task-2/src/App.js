import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/catalog/Catalog';
import Contacts from './components/Contacts';
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/about" component={About} />
      <Route path="/games/:gameId" component={Details} />
      <Route path="/logout" render={() => {
        console.log('Logged Out!');

        return <Redirect to="/" />
      }} />

    </div>
  );
}

export default App;
