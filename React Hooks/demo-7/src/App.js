import { useState, useEffect, Provider } from 'react';
import AuthContext from './contexts/AuthContext';
import Counter from './components/Counter';

function App() {
  let [count, setCount] = useState(0);

  const changeText = (e) => {
    e.preventDefault();

    setCount(x => x + 1);
  }

  return (
    <AuthContext.Provider value={count}>
      <div className="App">

        {count < 10
          ? <Counter value={count} />
          : ''}

        <button onClick={changeText}>+</button>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
