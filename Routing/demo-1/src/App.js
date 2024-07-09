import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Catalog from './components/Catalog';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/contact" component={Contact} />

        <Route path="/games/:gameId" component={Details} />
        <Route path="/custom">
          <h2>Custom page</h2>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
