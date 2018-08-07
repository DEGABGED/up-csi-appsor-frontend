import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasicInfoView from '../../presentational/view/BasicInfoView';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.currentTarget;
    const newBasicInfo = { ...this.props.basicInfo, [name]: value };
    newBasicInfo[name] = value;
    this.props.handleChange(newBasicInfo);
  }

  render() {
    return (
      <div>
        <BasicInfoView
          basicInfo={this.props.basicInfo}
          handleChange={this.handleChange}
          errors={this.props.errors}
        />
      </div>
    );
  }
}

BasicInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  basicInfo: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

BasicInfo.defaultProps = {
  errors: undefined,
};

export default BasicInfo;
