import logo from './logo.svg';
import './App.css';

import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>

        <main>
          <ToDoList />
        </main>

        <footer>All rights resieved. &copy;</footer>
      </header>
    </div>
  );
}

export default App;
