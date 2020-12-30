import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './containers/main/main';
import Tips from './components/tips/tips';
import AboutUs from './components/about-us/AboutUs';

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
          <Tips />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
