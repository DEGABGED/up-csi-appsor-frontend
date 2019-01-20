import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import CommitteeCarousel from './containers/CommitteeCarousel';
import Form from './containers/Form';
import './assets/stylesheets/App.css';
import initialState from './helpers/appstate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.setFormState = this.setFormState.bind(this);
  }

  setFormState(state) {
    this.setState(state);
  }

  render() {
    return (
      <Router>
        <NavBar>
          <Route exact path="/" component={Home} />
          <Route path="/committees" component={CommitteeCarousel} />
          <Route
            path="/form"
            component={() => <Form values={this.state} setFormState={this.setFormState} />}
          />
        </NavBar>
      </Router>
    );
  }
}

export default App;
