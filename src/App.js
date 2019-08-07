import React from 'react';
import './App.scss';
import Cover from './components/Cover/Cover'
import Open from './components/Open/Open'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Cover} />
        <Route path='/open' component={Open} />
      </Switch>
    </div>
  );
}

export default App;
