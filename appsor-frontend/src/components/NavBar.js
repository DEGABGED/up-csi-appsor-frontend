import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Menu, Responsive, Sidebar, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import upcsi from '../assets/images/upcsi.png';

const NavBarMobile = ({
  handleClick,
  handlePusher,
  handleToggle,
  visible,
  items,
  children,
}) => (
  <Sidebar.Pushable
    style={{
      width: '100%',
      zIndex: 1000,
    }}
  >
    <Sidebar
      as={Menu}
      fixed
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
    >
      <Menu.Item>
        <Image className="navbar-logo navbar-logo-mobile" src={upcsi} size="mini" centered />
      </Menu.Item>
      {items.map(item => (
        <Menu.Item
          key={item.key}
          name={item.name}
          className="navbar-item-text"
          onClick={() => {
            handlePusher();
            handleClick(item.route);
          }}
        />
      ))}
    </Sidebar>
    <Menu
      fixed="top"
      inverted
      style={{ height: '60px' }}
    >
      <Menu.Item onClick={handleToggle}>
        <Icon name="sidebar" />
      </Menu.Item>
    </Menu>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={handlePusher}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({
  activeItem,
  handleClick,
  items,
}) => (
  <Menu id="navbar">
    <Image className="navbar-logo" src={upcsi} size="mini" />
    <Menu.Menu position="right">
      {items.map(item => (
        <Menu.Item
          key={item.key}
          name={item.name}
          className="navbar-item navbar-item-text"
          active={activeItem === item.route}
          onClick={() => handleClick(item.route)}
        />
      ))}
    </Menu.Menu>
  </Menu>
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeItem: '/committees',
    };

    this.handlePusher = this.handlePusher.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handlePusher() {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  }

  handleToggle() {
    this.setState({ visible: !this.state.visible });
  }

  handleClick(route) {
    this.setState({ activeItem: route });
    this.props.history.push(route);
  }

  render() {
    const props = {
      ...this.state,
      handlePusher: this.handlePusher,
      handleToggle: this.handleToggle,
      handleClick: this.handleClick,
      items: [
        { name: 'Committees', route: '/committees', key: 'Committees' },
        { name: 'Apply Now', route: '/form', key: 'Apply Now' },
      ],
    };

    if (this.props.location.pathname === '/') return this.props.children;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile {...props}>
            {this.props.children}
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop {...props} />
          {this.props.children}
        </Responsive>
      </div>
    );
  }
}

NavBarMobile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handlePusher: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    route: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
};

NavBarDesktop.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    route: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
};

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(NavBar);
