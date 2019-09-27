import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./components/layouts/HomePage"
import './App.css';


function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
