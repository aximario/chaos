import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Demo from './Demo'
import Home from './Home'

function App() {
  return (
    <Router>
      <>
        <Route path="/" component={Home} />
        <Route path='/demo' component={Demo} />
      </>
    </Router>
  );
}

export default App;
