import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './container/pages/Home';
import Result from './container/pages/Result';
import AppFormik from './AppFormik';

const App = ({ values }) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/committees">Committees</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>

      <hr />

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
