import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';

import glitter1 from '../../assets/images/glitters/glitter1.png';
import glitter2 from '../../assets/images/glitters/glitter2.png';
import glitter3 from '../../assets/images/glitters/glitter3.png';
import glitter4 from '../../assets/images/glitters/glitter4.png';
import glitter5 from '../../assets/images/glitters/glitter5.png';
import glitter10 from '../../assets/images/glitters/glitter10.png';
import '../../assets/stylesheets/MobileGlitter.css';

function MobileGlitter() {
  const pics = [glitter1, glitter2, glitter3, glitter4, glitter5, glitter10];

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

export default MobileGlitter;
