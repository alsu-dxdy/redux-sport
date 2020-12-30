import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './containers/main/main';
import Header from './components/header/Header';

import './App.css';


const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/tips">
          <p>tips</p>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
