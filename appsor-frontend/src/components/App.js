import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './container/pages/Home';
import Result from './container/pages/Result';
import AppFormik from './AppFormik';
import '../assets/stylesheets/App.css';

const App = ({ values }) => (
  <Router>
    <div>
      <NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/committees" component={Result} />
        <Route
          path="/form"
          component={() => <AppFormik values={values} />}
        />
      </NavBar>
    </div>
  </Router>
);

App.propTypes = {
  values: PropTypes.object.isRequired,
};

export default App;
