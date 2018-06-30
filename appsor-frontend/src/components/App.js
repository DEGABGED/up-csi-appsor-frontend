import React, { Component } from 'react';
import Page from './Route/Page';
import pages from './Route/pageorder';
import initialState from './appstate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
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

  handleChange(page, field, event, data) {
    const value = page === 'skillsInterests'
      ? data.value
      : event.target.value;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [page]: {
          ...prevState.formData[`${page}`],
          [field]: value,
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
        handlePressPrev={this.handlePressPrev}
        handlePressNext={this.handlePressNext}
        handleChange={this.handleChange}
        currentPage={this.state.currentPage}
        formData={this.state.formData}
      />
    );
  }
}

export default App;
