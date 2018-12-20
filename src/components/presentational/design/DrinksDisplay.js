import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';

import soda from '../../../assets/images/drinks/soda.png';
import milk from '../../../assets/images/drinks/milk.png';
import energy from '../../../assets/images/drinks/energy-drink.png';
import wineGla from '../../../assets/images/drinks/wine-glass.png';
import tea from '../../../assets/images/drinks/tea.png';
import bubble from '../../../assets/images/drinks/bubble-tea.png';
import '../../../assets/stylesheets/DrinksDisplay.css';

function DrinksDisplay() {
  const pics = [soda, milk, energy, wineGla, tea, bubble];

  return (
    <Responsive {...Responsive.onlyMobile} className="drinks-display-case" >
      {pics.map((pic, i) => (
        <Image
          key={i}
          src={pic || null}
          size="mini"
          className="drinks-display-drink"
        />
      ))}
    </Responsive>
  );
}

export default DrinksDisplay;
