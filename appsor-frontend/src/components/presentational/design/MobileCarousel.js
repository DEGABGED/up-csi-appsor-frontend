import React from 'react';
import '../../../assets/stylesheets/MobileCarousel.css';

import ReadMeModal from './ReadMeModal';
import CommArray from './CommitteeData';



function MobileCarousel(props) {

  return (
    <div className="mobile-container">
      {CommArray.map((comm, index) => (
    <ReadMeModal
      name={comm.name}
      description={comm.description}
      key={index}
      img={comm.img}
      trigger={
        <div className="mobile-div" style={{ backgroundImage: `url(${  comm.img  })` }}>
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
