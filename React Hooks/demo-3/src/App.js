import {useState, useEffect} from 'react';

function App() {
  let [text, setText] = useState('');
  let [info, setInfo] = useState({
    name: 'Peter',
    age: 30,
    hobbies: ['first', 'second', 'third']
  })

  
  useEffect(() => {
    setTimeout(() => {
      setInfo(state => ({
        ...state,
        name: 'sss',
        age: 19
      }))
    }, 2000)
  }, [text])

  const changeText = (e) => {
    e.preventDefault();

    setText(e.currentTarget);
  }
 
  return (
    <div className="App">
      <input type='text' onChange={changeText}/>
      <p>{info.name} - {info.age}</p>
      <ul>
        {info.hobbies.map(x => <li>{x}</li>)}
      </ul>
    </div>
  );
}

export default App;
