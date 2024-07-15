import { useState, useEffect } from 'react';

function App() {
  let [text, setText] = useState('');
  let [name, setName] = useState('Simona');


  useEffect(() => {
    setTimeout(() => {
      setName('Magi')
    }, 2000)

  }, [text])

  const onChangeHandler = (e) => {
    e.preventDefault();

    setText(e.currentTarget);
  }
  return (
    <div className="App">
      <input type='text' onChange={onChangeHandler} />
      <p>{name}</p>
    </div>
  );
}

export default App;
