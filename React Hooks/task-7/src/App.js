import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import People from "./components/People";
import Cars from "./components/Cars";

function App() {
  return (
    <>
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/people" exact component={People} />
      <Route path="/cars" exact component={Cars} />
    </>
  );
}

export default App;
