import react from "react";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
           <Route path="/contact">
            <Contact />
          </Route>
           <Route path="/watchlist">
            <Watchlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
