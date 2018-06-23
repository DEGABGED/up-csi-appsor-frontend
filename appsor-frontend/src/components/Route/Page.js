import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home';
import Result from '../Result/Result';
import Affiliations from '../Forms/Affiliations/Affiliations';
import BasicInfo from '../Forms/BasicInfo/BasicInfo';
import Committee from '../Forms/Committee/Committee';
import SkillsInterests from '../Forms/SkillsInterests/SkillsInterests';

class Page extends Component {
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage() {
    let page;
    switch (this.props.currentPage) {
      case 'Home': {
        page = (
          <Home
            handlePress={this.props.handlePress}
          />
        );
        break;
      }
      case 'Affiliations': {
        page = (
          <Affiliations
            handlePress={this.props.handlePress}
          />
        );
        break;
      }
      case 'BasicInfo': {
        page = (
          <BasicInfo
            handlePress={this.props.handlePress}
          />
        );
        break;
      }
      case 'Committee': {
        page = (
          <Committee
            handlePress={this.props.handlePress}
          />
        );
        break;
      }
      case 'SkillsInterests': {
        page = (
          <SkillsInterests
            handlePress={this.props.handlePress}
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
    return <div>{this.renderPage()}</div>;
  }
}

Page.propTypes = {
  handlePress: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Page;
