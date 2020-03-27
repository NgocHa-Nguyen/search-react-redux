import React from "react";
import Index from "./components/Index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/">
              <Index></Index>
            </Route>
            <Route path="/detail" component={UserDetail}>
              <UserDetail></UserDetail>
             </Route> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
