import React, { Component } from 'react';
import update from 'immutability-helper';
import Page from './container/helper/Page';
import pages from './container/helper/pageorder';
import initialState from './container/helper/appstate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handlePressPrev = this.handlePressPrev.bind(this);
    this.handlePressNext = this.handlePressNext.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleDynamicForm = this.handleDynamicForm.bind(this);
    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleDynamicDropdown = this.handleDynamicDropdown.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handlePressPrev() {
    this.setState({ currentPage: pages.prev().value });
  }

  handlePressNext() {
    this.setState({ currentPage: pages.next().value });
  }

  // Used by BasicInfo
  handleForm(page, field, event) {
    const { target: { value } } = event;
    this.setState(prevState => ({
      [page]: {
        ...prevState[`${page}`],
        [field]: value,
      },
    }));
  }

  // Used by Affiliations Page Dynamic Form
  handleDynamicForm(page, field, form, event) {
    const { target: { value } } = event;
    // For updating previously built forms
    if (this.state[`${page}`][form]) {
      this.setState(prevState => ({
        [page]: update(
          prevState[`${page}`], {
            [form]: {
              [field]: { $set: value },
            },
          },
        ),
      }));
    // For creating new forms
    } else {
      this.setState(prevState => ({
        [page]: [
          ...prevState[`${page}`],
          { [field]: value },
        ],
      }));
    }
  }

  // Used by Affiliations for Deletion of Dynamic Forms
  handleDeleteForm(page, formID) {
    const value = this.state[`${page}`].slice();
    value.splice(formID, 1);
    this.setState({ [page]: value });
  }

  // Used by Committee
  handleDynamicDropdown(page, field, form, event, data) {
    const { value } = data;
    this.setState(prevState => ({
      [page]: update(prevState[`${page}`], {
        [form]: {
          [field]: { $set: value },
        },
      }),
    }));
  }

  // Used by skillsInterest
  handleDropdown(page, field, event, data) {
    const { value } = data;
    this.setState(prevState => ({
      [page]: {
        ...prevState[`${page}`],
        [field]: value,
      },
    }));
  }

  // API Call
  // handleSubmit() {

  // }

  render() {
    console.log(this.state);
    return (
      <Page
        data={this.state}
        handlePressPrev={this.handlePressPrev}
        handlePressNext={this.handlePressNext}
        handleForm={this.handleForm}
        handleDynamicForm={this.handleDynamicForm}
        handleDeleteForm={this.handleDeleteForm}
        handleDynamicDropdown={this.handleDynamicDropdown}
        handleDropdown={this.handleDropdown}
      />
    );
  }
}

export default App;
