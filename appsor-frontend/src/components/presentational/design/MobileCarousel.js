import React from 'react';
import PropTypes from 'prop-types';
import "../../../assets/stylesheets/MobileCarousel.css";
import { Image } from 'semantic-ui-react'

import ReadMeModal from './ReadMeModal';
import CommArray from './CommitteeData';



function MobileCarousel(props) {
  const { length } = CommArray;

  return (
		<div className="mobile-container">
        {CommArray.map((comm, index) => (
            <ReadMeModal
              name={comm.name}
              key={index}
              trigger={
                <div className="mobile-div" style={{height: (props.windowHeight - 50)/length - 10}}>
                  <Image src={comm.img} alt='engg-comm' rounded/>
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


MobileCarousel.propTypes = {
  windowHeight: PropTypes.number
};

MobileCarousel.defaultProps = {
  windowHeight: window.innerHeight
};

export default MobileCarousel;
