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
    this.handlePressPrev = this.handlePressPrev.bind(this);
    this.handlePressNext = this.handlePressNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePressPrev() {
    this.setState({ currentPage: pages.prev().value });
  }

  handlePressNext() {
    this.setState({ currentPage: pages.next().value });
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
    console.log(JSON.stringify(this.state.formData))
    return (
      <Page
        handlePressPrev={this.handlePressPrev}
        handlePressNext={this.handlePressNext}
        handleChange={this.handleChange}
        currentPage={this.state.currentPage}
      />
    );
  }
}

export default App;
