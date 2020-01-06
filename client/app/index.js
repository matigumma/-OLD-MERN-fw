import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';
/* import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap'; */
//import App from './components/App/App';
import App from './components/App/App.jsx';

//import 'whatwg-fetch';

render((
    <App/>
), document.getElementById('app'));
