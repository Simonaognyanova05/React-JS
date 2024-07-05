import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogPage from "./components/CatalogPage";
import CreatePage from "./components/CreatePage";
import EditPage from './components/EditPage';
import GameDetails from './components/GameDetails';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const routes = {
    '/': WelcomeWorld,
    '/create-game': CreatePage,
    '/login': Login,
    '/register': Register
  }
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <WelcomeWorld />
      </main>
    </div>
  );
}
 
export default App;
