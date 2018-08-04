import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BasicInfoView from '../../presentational/view/BasicInfoView';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    let newBasicInfo = {...this.props.basicInfo, [name]:value};
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
  errors: PropTypes.object.isRequired
};

export default BasicInfo;
