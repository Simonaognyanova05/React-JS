import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>

        <main>
          <h2>Tasks</h2>
         <ToDoList/>
        </main>

        <footer>All rights resieved. &copy;</footer>
      </header>
    </div>
  );
}

export default App;
