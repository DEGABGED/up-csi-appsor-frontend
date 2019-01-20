import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import none from '../../assets/images/committees/default.png';
import engg from '../../assets/images/committees/engg.png';
import innov from '../../assets/images/committees/innov.png';
import pub from '../../assets/images/committees/pub.png';
import mni from '../../assets/images/committees/mni.png';
import exte from '../../assets/images/committees/exte.png';
import service from '../../assets/images/committees/service.png';

function CommitteeChoiceIcon(props) {
  const logos = [none, engg, innov, pub, mni, exte, service];
  return (
    <Image
      className="committee-logo"
      src={logos[props.committee_id || 0]}
      size="tiny"
    />
  );
}

CommitteeChoiceIcon.propTypes = {
  committee_id: PropTypes.number,
};

CommitteeChoiceIcon.defaultProps = {
  committee_id: 0,
};

export default CommitteeChoiceIcon;
