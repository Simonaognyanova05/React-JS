function App() {

  const submitData = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { type, breed } = Object.fromEntries(formData);

    fetch('http://localhost:3030/jsonstore/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type, breed })
    })
  }

  return (
    <form method="POST" onSubmit={submitData}>
      <div>
        <label htmlFor="type">Type: </label>
        <input type="text" name="type" id="type" />
      </div>

      <div>
        <label htmlFor="breed">Breed: </label>
        <input type="text" name="breed" id="breed" />
      </div>
      <input type="submit" value="Submit" />

    </form>
  );
}

export default App;
