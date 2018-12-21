import React from 'react';
import '../../assets/stylesheets/MobileCarousel.css';

import ReadMeModal from '../design/ReadMeModal';
import CommArray from '../../helpers/committeeData';


function MobileCarousel() {
  return (
    <div className="mobile-container">
      {CommArray.map((comm, index) => (
        <ReadMeModal
          name={comm.name}
          description={comm.description}
          key={index}
          img={comm.img}
          trigger={
            <div
              className={`mobile-div${(comm.name === 'MEMBERSHIPS AND INTERNALS') ? ' inte-div' : ''}`}
              style={{ backgroundImage: `url(${comm.img})` }}
            >
              <div className="mobile-title" >
                <h1>{comm.name} COMMITTEE</h1>
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
}


export default MobileCarousel;
