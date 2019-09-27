import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./components/layouts/HomePage";
import ReadMoreCharacters from "./components/readmore/ReadMoreCharacters"
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/people/:id" component={ReadMoreCharacters}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
