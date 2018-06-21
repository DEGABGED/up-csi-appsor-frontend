import React, { Component } from 'react';
import Home from './Home/Home';
import Result from './Result/Result';
import Affiliations from './Forms/Affiliations/Affiliations';
import BasicInfo from './Forms/BasicInfo/BasicInfo';
import Committee from './Forms/Committee/Committee';
import SkillsInterests from './Forms/SkillsInterests/SkillsInterests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
    };
    this.handlePressPrev = this.handlePressPrev.bind(this);
    this.handlePressNext = this.handlePressNext.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  handlePressPrev(prevPage) {
    this.setState({
      page: prevPage,
    });
  }

  handlePressNext(nextPage) {
    this.setState({
      page: nextPage,
    });
  }

  renderPage() {
    let page;
    switch (this.state.page) {
      case 'Home': {
        page = (
          <Home
            handlePressNext={this.handlePressNext}
          />
        );
        break;
      }
      case 'Affiliations': {
        page = (
          <Affiliations
            handlePressNext={this.handlePressNext}
            handlePressPrev={this.handlePressPrev}
          />
        );
        break;
      }
      case 'BasicInfo': {
        page = (
          <BasicInfo
            handlePressNext={this.handlePressNext}
            handlePressPrev={this.handlePressPrev}
          />
        );
        break;
      }
      case 'Committee': {
        page = (
          <Committee
            handlePressNext={this.handlePressNext}
            handlePressPrev={this.handlePressPrev}
          />
        );
        break;
      }
      case 'SkillsInterests': {
        page = (
          <SkillsInterests
            handlePressNext={this.handlePressNext}
            handlePressPrev={this.handlePressPrev}
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
