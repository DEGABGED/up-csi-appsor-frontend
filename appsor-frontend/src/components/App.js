import React, { Component } from 'react';
import update from 'immutability-helper';
import Page from './Route/Page';
import pages from './Route/pageorder';
import initialState from './appstate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handlePressPrev = this.handlePressPrev.bind(this);
    this.handlePressNext = this.handlePressNext.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleDynamicForm = this.handleDynamicForm.bind(this);
    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handlePressPrev() {
    this.setState({ currentPage: pages.prev().value });
  }

  handlePressNext() {
    this.setState({ currentPage: pages.next().value });
  }

  handleForm(page, field, event) {
    const { target: { value } } = event;
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

  handleDynamicForm(page, field, form, event) {
    const { target: { value } } = event;
    if (this.state.formData[`${page}`][form]) {
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [page]: update(prevState.formData[`${page}`], {
            [form]: {
              [field]: { $set: value },
            },
          }),
        },
      }));
    } else {
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [page]: [
            ...prevState.formData[`${page}`],
            { [field]: value },
          ],
        },
      }));
    }
  }

  handleDeleteForm(page, form) {
    const value = this.state.formData[`${page}`].slice();
    value.splice(form, 1);
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [page]: value,
      },
    }));
  }

  handleDropdown(page, field, event, data) {
    const { value } = data;
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
        currentPage={this.state.currentPage}
        formData={this.state.formData}
        handlePressPrev={this.handlePressPrev}
        handlePressNext={this.handlePressNext}
        handleForm={this.handleForm}
        handleDynamicForm={this.handleDynamicForm}
        handleDeleteForm={this.handleDeleteForm}
        handleDropdown={this.handleDropdown}
      />
    );
  }
}

export default App;
