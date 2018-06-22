import React, { Component } from 'react';
import Home from './Home/Home';
import Result from './Result/Result';
import Affiliations from './Forms/Affiliations/Affiliations';
import BasicInfo from './Forms/BasicInfo/BasicInfo';
import Committee from './Forms/Committee/Committee';
import SkillsInterests from './Forms/SkillsInterests/SkillsInterests';
import pages from '../utils/pageorder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home',
    };
    this.handlePress = this.handlePress.bind(this);
    this.renderPage = this.renderPage.bind(this);
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

  renderPage() {
    let page;
    switch (this.state.currentPage) {
      case 'Home': {
        page = (
          <Home
            handlePress={this.handlePress}
          />
        );
        break;
      }
      case 'Affiliations': {
        page = (
          <Affiliations
            handlePress={this.handlePress}
          />
        );
        break;
      }
      case 'BasicInfo': {
        page = (
          <BasicInfo
            handlePress={this.handlePress}
          />
        );
        break;
      }
      case 'Committee': {
        page = (
          <Committee
            handlePress={this.handlePress}
          />
        );
        break;
      }
      case 'SkillsInterests': {
        page = (
          <SkillsInterests
            handlePress={this.handlePress}
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
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
