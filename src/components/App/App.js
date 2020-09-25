import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';

import Header from '../Header/Header';
import routes from '../../routes';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.HOME} component={Home} exact={true} />
      </Switch>
    </Router>
  );
};

export default App;
