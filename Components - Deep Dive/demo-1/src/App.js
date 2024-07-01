import './App.css';

function App() {
  let numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Unordered list with array</h1>
      <ul>
        {numbers.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </>
  );
}

export default App;
