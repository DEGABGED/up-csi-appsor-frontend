import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './container/pages/Home';
import Result from './container/pages/Result';
import AppFormik from './AppFormik';
import '../assets/stylesheets/App.css';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/committees">Committees</Link>
    </li>
    <li>
      <Link to="/form">Form</Link>
    </li>
  </ul>
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
