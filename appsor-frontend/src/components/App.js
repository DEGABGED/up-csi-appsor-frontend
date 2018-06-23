import React, { Component } from 'react';
import Page from './Route/Page';
import pages from './Route/pageorder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
      formData: {
        basicInfo: null,
        skillsInterests: null,
        affiliations: null,
        committee: null,
      },
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePress(direction) {
    switch (direction) {
      case 'Prev': {
        this.setState({ currentPage: pages.prev().value });
        break;
      }
      case 'Next': {
        this.setState({ currentPage: pages.next().value });
        break;
      }
      default: {
        break;
      }
    }
  }

  handleChange(data, page, field) {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [page]: {
          ...prevState.formData[`${page}`],
          [field]: data,
        },
      },
    }));
  }

  // API Call
  // handleSubmit() {

  // }

  render() {
    console.log(this.state.formData);
    return (
      <Page
        handlePress={this.handlePress}
        handleChange={this.handleChange}
        currentPage={this.state.currentPage}
      />
    );
  }
}

export default App;
