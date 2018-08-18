import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import pi1 from '../../../assets/images/people/pi1.png';
import pi2 from '../../../assets/images/people/pi2.png';
import pi3 from '../../../assets/images/people/pi3.png';
import pi4 from '../../../assets/images/people/pi4.png';
import pi5 from '../../../assets/images/people/pi5.png';
import pi6 from '../../../assets/images/people/pi6.png';
import pi7 from '../../../assets/images/people/pi7.png';
import pi8 from '../../../assets/images/people/pi8.png';
import pi9 from '../../../assets/images/people/pi9.png';
import pi10 from '../../../assets/images/people/pi10.png';

function Glitter(props) {

  const pics = [pi1, pi2, pi3, pi4, pi5, pi6, pi7, pi8, pi9, pi10];

  function slicePics() {
    return pics.slice(parseInt(props.begin, 10), parseInt(props.end, 10));
  }

  function getMarginStyle(i) {
    const columns = props.columns || 0;
    const offset = props.offset || 0;
    const m = (120 / parseInt(columns, 10) * i) % 120 + parseInt(offset, 10);
    return {
      marginLeft: `${m}px`,
    };
  }
  
  return (
    <div className="glitter-pics">
      {slicePics().map((pic, i) => (
        <Image
          src={pic || null}
          size="mini"
          style={getMarginStyle(i)}
        />
      ))}
    </div>
  );
}

Glitter.propTypes = {
  begin: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  columns: PropTypes.string,
  offset: PropTypes.string,
};


Glitter.defaultProps = {
  columns: '5',
  offset: '30',
};

export default Glitter;
