import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import bubble from '../../assets/images/drinks/bubble-tea.png';
import drink from '../../assets/images/drinks/drink.png';
import energy from '../../assets/images/drinks/energy-drink.png';
import lemonade from '../../assets/images/drinks/lemonade.png';
import milk from '../../assets/images/drinks/milk.png';
import soda from '../../assets/images/drinks/soda.png';
import tea from '../../assets/images/drinks/tea.png';
import wineBot from '../../assets/images/drinks/wine-bottle.png';
import wineGla from '../../assets/images/drinks/wine-glass.png';
import wineSet from '../../assets/images/drinks/wine.png';

function Glitter(props) {
  const pics = [bubble, wineBot, soda, tea, lemonade, wineSet, milk, drink, energy, wineGla];

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
