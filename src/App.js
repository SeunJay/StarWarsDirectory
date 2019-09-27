import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./components/layouts/HomePage";
import ReadMoreCharacters from "./components/readmore/ReadMoreCharacters"
import ReadMorePlanets from "./components/readmore/ReadMorePlanets"
import ReadMoreShips from "./components/readmore/ReadMoreShips"
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/people/:id" component={ReadMoreCharacters}/>
          <Route exact path="/planets/:id" component={ReadMorePlanets}/>
          <Route exact path="/starships/:id" component={ReadMoreShips}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
