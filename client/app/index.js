import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import 'bootstrap';
import App from './components/App/App';
import Home from './components/Home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';
import NotFound from './components/App/NotFound';

render((
  <Router>
    <App>
      <Switch>
        {/* <Route exact path={`/`} component={Splash}/> */}
        <Route exact path={`/`} component={Home}/>
        <Route path={`/helloworld`} component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
