import React from 'react';
import './App.scss';
import Cover from './components/Cover/Cover'
import Open from './components/Open/Open'
import Details from './components/Details/Details'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Cover} />
        <Route path='/open' component={Open} />
        <Route path='/pokemon/:name' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
