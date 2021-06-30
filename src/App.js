import React from "react";
import "./App.css";
import Home from "./components/Home";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Watchlist from "./components/Watchlist";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
         <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           <Route exact  path="/watchlist">
           <Watchlist />
          </Route>
           <Route exact  path="/contact">
            <Contact />
          </Route>
         <Footer />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
