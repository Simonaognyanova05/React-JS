import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  const countHandler = (e) => {
    e.preventDefault();

    setCount(x => x + 1);
  }
  return (
    <div className="App">
      <>
        <h3>Counter</h3>
        {count > 10
          ? <p style={{ color: 'red' }}>{count}</p>
          : <p style={{ color: 'blue' }}>{count}</p>
        }

        <button onClick={countHandler}>+</button>
      </>
    </div>
  );
}

export default App;
