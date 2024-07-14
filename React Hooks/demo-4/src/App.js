import { useState, useEffect } from 'react';
import Counter from './components/Counter';

function App() {
  let [count, setCount] = useState(0);

  const changeText = (e) => {
    e.preventDefault();

    setCount(x => x + 1);
  }

  return (
    <div className="App">

      {count < 10
        ? <Counter value={count} />
        : ''}

      <button onClick={changeText}>+</button>
    </div>
  );
}

export default App;
