import {useState, useEffect} from 'react';

function App() {
  let [info, setInfo] = useState({
    name: 'Peter',
    age: 30,
    hobbies: ['first', 'second', 'third']
  })

  useEffect(() => {
    setTimeout(() => {
      setInfo(state => ({
        ...state,
        name: "Simona",
        age: 19
      }))
    }, 2000)
  }, [])
  return (
    <div className="App">
      <p>{info.name} - {info.age}</p>
      <ul>
        {info.hobbies.map(x => <li>{x}</li>)}
      </ul>
    </div>
  );
}

export default App;
