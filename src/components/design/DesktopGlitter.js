import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import glitter1 from '../../assets/images/glitters/glitter1.png';
import glitter2 from '../../assets/images/glitters/glitter2.png';
import glitter3 from '../../assets/images/glitters/glitter3.png';
import glitter4 from '../../assets/images/glitters/glitter4.png';
import glitter5 from '../../assets/images/glitters/glitter5.png';
import glitter6 from '../../assets/images/glitters/glitter6.png';
import glitter7 from '../../assets/images/glitters/glitter7.png';
import glitter8 from '../../assets/images/glitters/glitter8.png';
import glitter9 from '../../assets/images/glitters/glitter9.png';
import glitter10 from '../../assets/images/glitters/glitter10.png';

function Glitter(props) {
  const pics = [glitter1, glitter2, glitter3, glitter4, glitter5, glitter6, glitter7, glitter8, glitter9, glitter10];

  function slicePics() {
    return pics.slice(props.begin, props.end);
  }

  // salternates between left and right
  function getAlignStyle(i) {
    return {
      alignSelf: (i + props.offset) % 2 === 0 ? 'flex-start' : 'flex-end',
    };
  }

  return (
    <div className="glitter-pics">
      {slicePics().map((pic, i) => (
        <Image
          key={i}
          src={pic || null}
          size="mini"
          style={getAlignStyle(i)}
        />
      ))}
    </div>
  );
}

Glitter.propTypes = {
  begin: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  offset: PropTypes.number,
};


Glitter.defaultProps = {
  offset: 30,
};

export default Glitter;
