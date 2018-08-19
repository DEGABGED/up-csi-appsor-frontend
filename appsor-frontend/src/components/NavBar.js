import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import upcsi from '../assets/images/upcsi.png';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '/committees',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(route) {
    this.setState({ activeItem: route });
    this.props.history.push(route);
  }

  render() {
    const activeItem = this.state.activeItem;
    return (
      <Menu id="navbar">
        <Image className="navbar-logo" src={upcsi} size="mini" />
        <Menu.Menu position="right">
          <Menu.Item
            name="Committees"
            className="navbar-item"
            active={activeItem === '/committees'}
            onClick={() => this.handleClick('/committees')}
          />
          <Menu.Item
            name="Form"
            className="navbar-item"
            active={activeItem === '/form'}
            onClick={() => this.handleClick('/form')}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
