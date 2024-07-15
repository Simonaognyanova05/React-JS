import { useState, useEffect } from 'react';

function App() {

  let [name, setName] = useState('');


  useEffect(() => {
    return (() => {
      console.log('unmount');
    })
  }, [])

  const changeHandler = (e) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={changeHandler} />

      {name == 'Simona'
        ? <p>{name}</p>
        : ''
      }
    </div>
  );
}

export default App;
