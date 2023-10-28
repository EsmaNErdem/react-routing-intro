import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import VendingMachine from "./VendingMachine";
import Pizza from "./Pizza";
import Water from "./Water";
import Candy from "./Candy";
import NavBar from './NavBar';


// <Switch> goes through the <Route> components one by one in the order they are defined.
// It renders the first <Route> whose path matches the current URL. Once a match is found, it stops looking further, even if there are additional matching routes.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <VendingMachine />
          </Route>
          <Route path="/pizza" exact>
            <Pizza />
          </Route>
          <Route path="/water" exact>
            <Water />
          </Route>
          <Route path="/candy" exact>
            <Candy />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
