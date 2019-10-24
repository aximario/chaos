import React, { createContext, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Demo from './Demo'
import Home from './Home'
import initialState from './store'
import reducer from './reducer'

export const StoreContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Router>
      <StoreContext.Provider value={{ state, dispatch }}>
        <Route path="/" component={Home} />
        <Route path='/demo' component={Demo} />
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
