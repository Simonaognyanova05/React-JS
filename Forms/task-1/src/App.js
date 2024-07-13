function App() {

  const getFormData = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    console.log(formData.get('username'));
    console.log(formData.get('password'));
  };

  return (
    <>
      <form onSubmit={getFormData}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" name="Submit" value="Login" />
      </form>
    </>
  );
}

export default App;
