import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './container/pages/Home';
import Result from './container/pages/Result';
import AppFormik from './AppFormik';
import upcsi from '../assets/images/upcsi.png';
import '../assets/stylesheets/App.css';

const NavBar = () => (
  <div id="navbar">
    <Image className="navbar-logo" src={upcsi} size="mini" />
    <ul className="navbar-item-list">
      <li className="navbar-item">
        <Link to="/committees">Committees</Link>
      </li>
      <li className="navbar-item">
        <Link to="/form">Form</Link>
      </li>
    </ul>
  </div>
);

const App = ({ values }) => (
  <Router>
    <div>
      { window.location.pathname === '/' ? null : <NavBar /> }
      <Route exact path="/" component={Home} />
      <Route path="/committees" component={Result} />
      <Route
        path="/form"
        component={() => <AppFormik values={values} />}
      />
    </div>
  </Router>
);

App.propTypes = {
  values: PropTypes.object.isRequired,
};

export default App;
