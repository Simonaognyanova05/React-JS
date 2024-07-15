import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  let [count, setCount] = useState(0);

  const countHandler = (e) => {
    e.preventDefault();

    setCount(x => x + 1);
  }
  return (
    <div className="App">
      <>
        <Counter count={count} />
        <button onClick={countHandler}>+</button>
      </>
    </div>
  );
}

export default App;
