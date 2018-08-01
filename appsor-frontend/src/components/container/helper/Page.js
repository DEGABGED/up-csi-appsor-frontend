import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Result from '../pages/Result';
import Affiliations from '../pages/Affiliations';
import BasicInfo from '../pages/BasicInfo';
import Committee from '../pages/Committee';
import SkillsInterests from '../pages/SkillsInterests';

class Page extends Component {
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage() {
    let page;
    switch (this.props.data.currentPage) {
      case 'Home': {
        page = (
          <Home />
        );
        break;
      }
      case 'Affiliations': {
        page = (
          <Affiliations
            handleDynamicForm={this.props.handleDynamicForm}
            handleDeleteForm={this.props.handleDeleteForm}
            affiliations={this.props.data.affiliations}
          />
        );
        break;
      }
      case 'BasicInfo': {
        page = (
          <BasicInfo
            handleForm={this.props.handleForm}
            basicInfo={this.props.data.basicInfo}
          />
        );
        break;
      }
      case 'Committee': {
        page = (
          <Committee
            handleDynamicForm={this.props.handleDynamicForm}
            handleDynamicDropdown={this.props.handleDynamicDropdown}
            committees={this.props.data.committees}
          />
        );
        break;
      }
      case 'SkillsInterests': {
        page = (
          <SkillsInterests
            handleDropdown={this.props.handleDropdown}
            skillsInterests={this.props.data.skillsInterests}
          />
        );
        break;
      }
      default: {
        page = <Result />;
        break;
      }
    }
    return page;
  }

  render() {
    return <div>{this.renderPage()}<br /></div>;
  }
}

Page.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleDynamicForm: PropTypes.func.isRequired,
  handleDeleteForm: PropTypes.func.isRequired,
  handleDynamicDropdown: PropTypes.func.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Page;
