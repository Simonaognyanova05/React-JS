import { useState, useEffect } from 'react';

function App() {
  let [info, setInfo] = useState({
    name: 'Simona',
    age: 19
  });

  useEffect(() => {
    setTimeout(() => {
      setInfo(state => ({
        ...state,
        name: 'Magi',
        age: 13
      }))
    }, 2000)
  }, []);


  return (
    <div className="App">
      <p>{info.name} - {info.age}</p>
    </div>
  );
}

export default App;
