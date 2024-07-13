import { useEffect, useState } from "react";

function App() {
  const [animals, setAnimals] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/animals')
      .then(res => res.json())
      .then(result => {
        setAnimals(Object.values(result));
      });
  }, []);

  const selectAnimal = (e) => {
    setSelectedType(e.target.value);
  };

  let filteredAnimals;
  if (selectedType === 'All') {
    filteredAnimals = animals;
  } else {
    filteredAnimals = animals.filter(animal => animal.type === selectedType);
  }

  return (
    <div className="App">
      <select onChange={selectAnimal}>
        <option value="All">All</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
      </select>

      <ul>
        {filteredAnimals.map(x => (
          <li key={x._id}>{x.breed}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;