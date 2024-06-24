import Header from './components/Header';
import Slider from './components/Slider';
import Shop from './components/Shop';
import About from './components/About';
import Offer from './components/Offer';
import Blog from './components/Blog';
import Client from './components/Client';
import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Shop />
      <About />
      <Offer />
      <Blog />
      <Client />
      <Info />


      <footer class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>


    </div>
  );
}

export default App;
