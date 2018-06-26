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
            handlePressPrev={this.props.handlePressPrev}
            handlePressNext={this.props.handlePressNext}
            handleChange={this.props.handleChange}
          />
        );
        break;
      }
      case 'Affiliations': {
        page = (
          <Affiliations
            handlePressPrev={this.props.handlePressPrev}
            handlePressNext={this.props.handlePressNext}
            handleChange={this.props.handleChange}
          />
        );
        break;
      }
      case 'BasicInfo': {
        page = (
          <BasicInfo
            handlePressPrev={this.props.handlePressPrev}
            handlePressNext={this.props.handlePressNext}
            handleChange={this.props.handleChange}
          />
        );
        break;
      }
      case 'Committee': {
        page = (
          <Committee
            handlePressPrev={this.props.handlePressPrev}
            handlePressNext={this.props.handlePressNext}
            handleChange={this.props.handleChange}
          />
        );
        break;
      }
      case 'SkillsInterests': {
        page = (
          <SkillsInterests
            handlePressPrev={this.props.handlePressPrev}
            handlePressNext={this.props.handlePressNext}
            handleChange={this.props.handleChange}
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
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Page;
