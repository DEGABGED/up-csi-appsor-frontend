import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import Result from './containers/Result';
import Form from './containers/Form';
import './assets/stylesheets/App.css';

const App = ({ values }) => (
  <Router>
    <NavBar>
      <Route exact path="/" component={Home} />
      <Route path="/committees" component={Result} />
      <Route
        path="/form"
        component={() => <Form values={values} />}
      />
    </NavBar>
  </Router>
);

App.propTypes = {
  values: PropTypes.object.isRequired,
};

export default App;
