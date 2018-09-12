import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Dropdown, Label, Image } from 'semantic-ui-react';

import none from '../../../assets/images/committees/default.png';
import engg from '../../../assets/images/committees/engg.png';
import innov from '../../../assets/images/committees/innov.png';
import pub from '../../../assets/images/committees/pub.png';
import mni from '../../../assets/images/committees/mni.png';
import exte from '../../../assets/images/committees/exte.png';
import service from '../../../assets/images/committees/service.png';
import preventDefaultEnter from '../helper/preventDefaultEnter';


function Form(props) {
  const logos = [none, engg, innov, pub, mni, exte, service];

  function getDropdownError() {
    let error = typeof (props.errors) !== 'undefined' && !!props.errors.committee_id;
    error = error || (typeof (props.duplicates) !== 'undefined' && !!props.duplicates);
    return error;
  }

  return (
    <div className="column">
      <Image
        className="committee-logo"
        src={logos[props.committees.committee_id || 0]}
        size="tiny"
      />
      <Label circular size="big" color="black">{props.formID + 1}</Label>
      <div className="committee-fields">
        <p>Committee</p>
        <Dropdown
          className="committee-field"
          placeholder="Select a Committee"
          options={props.options}
          name={`${props.formID}`}
          selection
          search
          onChange={props.handleChangeCommittee}
          error={getDropdownError()}
        />
        <TextField
          className="reason-field"
          label="Reason"
          name={`${props.formID}`}
          value={props.committees.reason || ''}
          onChange={props.handleChangeReason}
          error={typeof (props.errors) !== 'undefined' && !!props.errors.reason}
          helperText={typeof (props.errors) !== 'undefined' ? props.errors.reason : undefined}
          onKeyPress={preventDefaultEnter}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  errors: PropTypes.object,
  duplicates: PropTypes.string,
  formID: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  committees: PropTypes.object.isRequired,
  handleChangeCommittee: PropTypes.func.isRequired,
  handleChangeReason: PropTypes.func.isRequired,
};

Form.defaultProps = {
  errors: undefined,
  duplicates: undefined,
};

export default Form;
