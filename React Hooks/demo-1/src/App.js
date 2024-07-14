import { useState, useEffect } from 'react';

function App() {
  let [name, setName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setName('Simona');
    }, 1500)
  }, [])
  return (
    <div className="App">
      <p>{!name ? "Loading..." : name}</p>
    </div>
  );
}

export default App;
