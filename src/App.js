import Listado from "./components/Listado";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={ Login }/>
      <Route exact path="/listado" component={ Listado }/>
    </Switch>
    </>
  );
}

export default App;
