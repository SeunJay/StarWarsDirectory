import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./components/layouts/HomePage"
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
